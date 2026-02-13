import React from "react";

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  ref,
  ...props
}) {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 font-medium text-black ">{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full border border-gray-300 rounded-md p-2 transition duration-300 ease-in-out hover:border-green-500  hover:shadow-md ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default Input;
