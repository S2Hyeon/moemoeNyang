import tensorflow as tf
from tensorflow.keras.layers import *
from tensorflow.keras.models import *
from tensorflow.keras.optimizers import *
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
from config import *
import os
import io
import cv2

# Create an empty list to store the predictions
# predictions = [0, 0, 0, 0, 0, 0, 0]

class_labels = ['A1', 'A2',
                'A3', 'A4', 'A5', 'A6', '증상이 확인되지 않습니다.']


def do_floor(x, digit=0):
    multiplier = 10 ** digit
    if x >= 0:
        res = int(x * multiplier) / multiplier
    else:
        if x == int(x * multiplier) / multiplier:
            res = int(x * multiplier) / multiplier
        else:
            res = int(x * multiplier) / multiplier-10 ** (-digit)

    digit_int = max(0, digit+1)
    format_str = f"%.{digit_int}f"
    return format_str % res


def preprocess_image(image_string):
    # image_string = tf.io.read_file(image_path)

    image = tf.image.decode_jpeg(image_string, channels=3)

    image = tf.image.resize(image, (TEST_IMAGE_SIZE, TEST_IMAGE_SIZE))

    image = image / 255.0  # Normalize pixel values to [0, 1]

    image = tf.expand_dims(image, axis=0)  # Add batch dimension

    return image


def multi_predict(model, image):
    predictions = []
    predicted_label = []

    # Make the prediction with the model
    pred = model.predict(image)

    # Get the indices of the top 3 maximum values in the array
    max_indices = np.argmax(pred[0])
    predictions.append(max_indices)
    print(pred, max_indices)

    # Get the top 3 maximum values
    top_3_max_values = pred[0][max_indices]
    predicted_label.append(class_labels[max_indices])
    predicted_label.append(do_floor(top_3_max_values, 4))

    print(predicted_label, " : ", top_3_max_values, "\n")
    predictions.append(
        (predicted_label))

    return predictions


def iou(y_true, y_pred):
    def f(y_true, y_pred):
        y_true = np.argmax(y_true, axis=-1)
        y_pred = np.argmax(y_pred, axis=-1)
        intersection = (y_true * y_pred).sum()
        union = y_true.sum() + y_pred.sum() - intersection
        x = (intersection + 1e-15) / (union + 1e-15)
        x = x.astype(np.float32)
        return x
    return tf.numpy_function(f, [y_true, y_pred], tf.float32)


def cal_iou(y_true, y_pred):
    y_true = np.argmax(y_true, axis=-1)[:, :, np.newaxis]
    y_pred = np.argmax(y_pred, axis=-1)[:, :, np.newaxis]
    intersection = (y_true * y_pred).sum()
    union = y_true.sum() + y_pred.sum() - intersection
    x = (intersection + 1e-15) / (union + 1e-15)
    x = x.astype(np.float32)
    return x, y_true, y_pred


def segm_predict(model, image, idx):
    # Convert the bytearray to a numpy array
    nparr = np.frombuffer(image, np.uint8)
    # Decode the numpy array as an image
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    # Preprocess the image
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = cv2.resize(img, (224, 224))
    mask = model_predict(img, model)

    y_true = np.zeros_like(mask)
    y_pred = mask

    # Evaluate the performance
    IoU_threshold = 0.5
    iou_value, y_true, y_pred = cal_iou(y_true, y_pred)
    if iou_value >= IoU_threshold:
        print("The predicted mask is accurate!")
    else:
        print("The predicted mask is inaccurate.")

    image_name = os.path.join("./img/segmentation", f"A{idx+1}", "predict.png")

    return show_prediction(img, model, model_pred=y_pred,
                           opt='total', save_path=image_name, show=False)


# define function for drawing polygon in image
def show_comb(image, mask, pred=None):
    # draw polygon line in image
    mask = np.where(mask == 0, image, [1, 1, 0])    # yellow

    plt.imshow(image)
    plt.imshow(mask, alpha=0.2)
    plt.title("ground_truth(yello)")
    if pred is not None:
        pred = np.where(pred == 0, image, [0, 0, 1])  # blue
        plt.imshow(pred, alpha=0.2)
        plt.title("ground_truth(yellow), prediction(blue)")
    plt.axis('off')


def model_predict(image, model):
    pred = model.predict(image[tf.newaxis, ...])
    b, h, w, c = pred.shape
    pred = tf.argmax(pred, axis=-1)
    pred = tf.reshape(pred, (h, w, 1))
    return pred


def show_prediction(image, model=None, model_pred=None, opt='base', save_path=None, show=True):
    plt.clf()

    title = ['Input Image', 'Predicted Image', 'Result Image']
    # title = ['Result Image']
    
    if model != None:
        pred = model_predict(image, model)
        display_list = [image, pred]
    elif model_pred is not None:
        pred = model_pred
        # display_list = [image, pred]
        display_list = [image, pred]
    else:
        pred = None
        display_list = [image]

    if opt == 'base':
        for i in range(len(display_list)):
            plt.subplot(1, len(display_list), i+1)
            plt.title(title[i])
            plt.imshow(tf.keras.utils.array_to_img(display_list[i]))
            plt.axis('off')
        if save_path != None:
            # plt.savefig(save_path)
            buf = io.BytesIO()
            plt.savefig(buf, format='png')
            buf.seek(0)
            return Image.open(buf)
        if show == True:
            plt.show()
    
    elif opt == 'comb':
        show_comb
        if save_path != None:
            # plt.savefig(save_path)
            buf = io.BytesIO()
            plt.savefig(buf, format='png')
            buf.seek(0)
            return Image.open(buf)
        if show == True:
            plt.show()

    elif opt == 'total': 
        if pred is not None:
            fig, ax = plt.subplots(figsize=(4, 4))
            pred = np.where(pred == 0, image, [0, 0, 1])  # blue
            plt.imshow(image)
            plt.imshow(pred, alpha=0.6)
            plt.title("Analysis Image")
        plt.axis('off')
        if save_path != None:
            # plt.savefig(save_path)
            buf = io.BytesIO()
            plt.savefig(buf, format='png')
            buf.seek(0)
            return Image.open(buf)
        if show == True:
            plt.show()
    else:
        raise Exception("fucntion show_pred: Wrong Option, You must choose one of ['base', comb', 'total']")