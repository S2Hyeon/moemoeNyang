import { useLottie } from "lottie-react";
import notfound from "./notfound.json";

const style = {
  height: 300,
};

const NotFoundLottie = () => {
  const options = {
    animationData: notfound,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default NotFoundLottie;
