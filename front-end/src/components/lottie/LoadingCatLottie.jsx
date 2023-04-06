import { useLottie } from "lottie-react";
import catrotation from "./catrotation.json";

const style = {
  height: 300,
};

const LoadingLottie = () => {
  const options = {
    animationData: catrotation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default LoadingLottie;
