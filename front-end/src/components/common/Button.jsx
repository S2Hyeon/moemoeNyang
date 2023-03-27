import React from "react";

export default function Button({
  children,
  style = "primary",
  shadow = false,
  onClick = () => {},
}) {
  let bgColor;
  let fontColor;
  let border;

  switch (style) {
    case "primary":
      bgColor = "bg-[#ffe5e5]";
      fontColor = "text-[#727272]";
      break;
    case "disabled":
      bgColor = "bg-gray-100";
      fontColor = "text-[#727272]";
      break;
    default:
      break;
  }

  return (
    <div
      className={`w-full h-9 rounded-[10px] ${bgColor} flex justify-center items-center border border-slate-100`}
      role={style === "disabled" ? "none" : "button"}
      onClick={style === "disabled" ? () => {} : onClick}
      style={{ boxShadow: shadow && "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
    >
      <p className={`text-base font-bold text-center ${fontColor}`}>
        {children}
      </p>
    </div>
  );
}
