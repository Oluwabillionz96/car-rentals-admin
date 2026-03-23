"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  showIcon?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", showIcon = true, isLoading, className = "", ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        disabled={isLoading || props.disabled}
        className={`relative flex items-center justify-center gap-3 w-full py-4.5 rounded-2xl transition-all duration-300 font-bold text-base md:text-lg tracking-wide hover:shadow-xl hover:shadow-brand-primary/20 active:scale-[0.98] outline-none disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed
          ${variant === "primary" ? "bg-linear-to-r from-brand-secondary to-brand-primary text-white" : "bg-white text-brand-primary border-2 border-brand-primary hover:bg-brand-primary/5"}
          ${className}
        `
          .split(/\s+/)
          .filter(Boolean)
          .join(" ")}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            {children}
            {showIcon && <ArrowRight size={20} className="stroke-[3px]" />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
