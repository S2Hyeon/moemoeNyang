import io
import base64
from function import *
from config import *
import tensorflow as tf
from PIL import Image
from flask import Flask, request, jsonify, redirect
from flask_cors import CORS
import matplotlib

matplotlib.use('agg')

os.environ["CUDA_VISIBLE_DEVICES"]="-1"

app = Flask(__name__)
CORS(app, resource={r'*': {'origins': 'https://j8a801.p.ssafy.io/api'}})

@app.route("/predict", methods=["POST"])
def predict():
    # view로부터 반환될 데이터 딕셔너리를 초기화합니다.
    data = {"success": False}

    # 이미지가 엔트포인트에 올바르게 업로드 되었는디 확인하세요
    if request.method == "POST":
        if request.files.get("file"):
            # PIL 형식으로 이미지를 읽어옵니다.
            image1 = request.files["file"].read()
            image2 = Image.open(io.BytesIO(image1))
            image_byte_string = io.BytesIO()
            image2 = image2.convert("RGB")
            image2.save(image_byte_string, format='JPEG')
            image_byte_string = image_byte_string.getvalue()

            # 분류를 위해 이미지를 전처리합니다.
            image2 = preprocess_image(image_byte_string)

            data["predictions"] = []
            # classification 불러오기
            model_path = os.path.join(os.path.dirname(__file__), 'model', 'classification',
                                      'model_A1_A2_A3_A4_A5_A6.h5')
            model = tf.keras.models.load_model(filepath=model_path, compile=False)
            optimizer = tf.keras.optimizers.SGD(
                learning_rate=TEST_LEARNING_RATE, momentum=0.999, nesterov=True)
            model.compile(loss=LOSS, optimizer=optimizer, metrics=['acc', tf.keras.metrics.Precision(
                name='precision'), tf.keras.metrics.Recall(name='recall')])

            test = multi_predict(model, image2)
            print("분석 결과 확인!!!! : ", test)
            # model_A1_A2_A3_A4_A5_A6 예측 결과 저장
            data["predictions"].append(test[1][0])
            data["predictions"].append(test[1][1])


            # segmentation 시작
            model_path = os.path.join(os.path.dirname(__file__), 'model', 'segmentation',
                                      f'A{test[0]+1}_model.h5')
            model = tf.keras.models.load_model(filepath=model_path, compile=False)
            model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=LEARNING_RATE[0]), loss=tf.keras.losses.CategoricalCrossentropy(),
                          metrics=['acc', tf.keras.metrics.Precision(name='precision'),
                                   tf.keras.metrics.Recall(name='recall'),
                                   tf.keras.metrics.MeanIoU(num_classes=2, name='miou'), iou])

            segm_image = segm_predict(model, image1, test[0])
            buf = io.BytesIO()
            segm_image.save(buf, format='PNG')
            buf.seek(0)

            data["predictions"].append(data["predictions"].append(
                base64.b64encode(buf.getvalue()).decode('utf-8')))

            # 요청이 성공했음을 나타냅니다.
            data["success"] = True

    # JSON 형식으로 데이터 딕셔너리를 반환합니다.
    return jsonify(data)


if __name__ == "__main__":
    # app.run(host="0.0.0.0", port="5000")
    print(("* Loading classification model and Flask starting server...",
          "please wait until server has fully started"))
    app.run(host="127.0.0.1", port="5000")
