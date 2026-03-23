"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelRight?: React.ReactNode;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      labelRight,
      icon,
      rightIcon,
      error,
      type,
      className = "",
      containerClassName = "",
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    const togglePassword = () => setShowPassword(!showPassword);

    return (
      <div
        className={`flex flex-col gap-1.5 w-full ${containerClassName}`.trim()}
      >
        {(label || labelRight) && (
          <div className="flex justify-between items-center px-1">
            {label && (
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                {label}
              </label>
            )}
            {labelRight && (
              <div className="flex items-center">{labelRight}</div>
            )}
          </div>
        )}
        <div className="relative w-full group">
          {icon && (
            <div className="absolute left-4.5 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none group-focus-within:text-brand-primary transition-colors flex items-center justify-center w-5 h-5">
              {icon}
            </div>
          )}
          <input
            {...props}
            ref={ref}
            type={isPassword ? (showPassword ? "text" : "password") : type}
            className={`w-full bg-brand-input border-none rounded-xl py-4 transition-all duration-200 focus:ring-2 focus:ring-brand-primary/20 focus:outline-none placeholder:text-gray-400 text-gray-700
              ${icon ? "pl-12" : "pl-5"} 
              ${isPassword || rightIcon ? "pr-12" : "pr-5"}
              ${error ? "ring-2 ring-red-500/50" : ""}
              ${className}
            `
              .split(/\s+/)
              .filter(Boolean)
              .join(" ")}
          />
          {isPassword ? (
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none z-10"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          ) : (
            rightIcon && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                {rightIcon}
              </div>
            )
          )}
        </div>
        {error && (
          <span className="text-[11px] font-medium text-red-500 px-1 animate-in fade-in slide-in-from-top-1">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
