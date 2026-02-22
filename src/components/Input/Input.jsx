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
    <div className="flex flex-col group">
      {label && (
        <label className="mb-1 font-medium text-black transition-all duration-200 group-focus-within:text-blue-600">
          {label}
        </label>
      )}

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        ref={ref}
        className={`
          w-full
          border border-gray-300
          rounded-md
          p-2
          outline-none
          transition-all duration-300 ease-in-out

          hover:border-green-500 hover:shadow-md

          focus:border-green-600
          focus:ring-2 focus:ring-blue-200
          focus:shadow-lg
          focus:scale-[1.02]

          ${className}
        `}
        {...props}
      />
    </div>
  );
}

export default Input;
