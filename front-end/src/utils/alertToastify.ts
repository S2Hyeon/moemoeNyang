import { Zoom, toast } from "react-toastify";

export const AlertError = (message) => {
  toast.dismiss();
  setTimeout(
    () =>
      toast.error(message, {
        position: "top-center",
        transition: Zoom,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      }),
    300,
  );
};

export const AlertWarning = (message) => {
  toast.dismiss();
  setTimeout(
    () =>
      toast.warning(message, {
        position: "top-center",
        transition: Zoom,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      }),
    300,
  );
};

export const AlertSuccess = (message) => {
  toast.dismiss();
  setTimeout(
    () =>
      toast.success(message, {
        position: "top-center",
        transition: Zoom,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      }),
    300,
  );
};
