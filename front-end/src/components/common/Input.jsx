import React from "react";

export default function Input({
  autoFocus = true,
  placeholder,
  type,
  disabled = false,
  value = "",
  onChange = () => {},
  ...props
}) {
  return (
    <input
      autoFocus={autoFocus}
      className={`text-xs w-full mb-2 rounded border px-2 py-2 focus:outline-none active:outline-none bg-[#FCFDFD] border-gray-300 ${
        disabled ? "bg-gray-100" : ""
      } ${props.className}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
