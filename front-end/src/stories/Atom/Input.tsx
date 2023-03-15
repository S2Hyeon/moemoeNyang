import React from "react";

interface iProps {
  autoFocus: boolean;
  placeholder: string;
  bgColor: "gray" | "lisa" | "white";
  boderColor: "gray" | "lisa";
  type: "text" | "email" | "password";
}

const Input = ({
  autoFocus = false,
  placeholder = "",
  bgColor = "gray",
  boderColor = "gray",
  type = "text",
}: iProps) => {
  const classNameArray: Array<string> = [];

  switch (bgColor) {
    case "gray":
      classNameArray.push("bg-gray-100");
      break;
    case "lisa":
      classNameArray.push("bg-lisa-100");
      break;
    case "white":
      classNameArray.push("bg-white-100");
      break;
  }

  switch (boderColor) {
    case "gray":
      classNameArray.push("border-gray-300", "focus:border-gray-400");
      break;
    case "lisa":
      classNameArray.push("border-lisa-300", "focus:border-lisa-400");
      break;
  }

  return (
    <input
      autoFocus={autoFocus}
      className={`text-xs w-full mb-2 rounded border px-2 py-2 focus:outline-none active:outline-none 
      ${classNameArray.join(" ")}`}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
