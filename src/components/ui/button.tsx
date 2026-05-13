// src/components/ui/button.tsx

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
  };

  const variants = {
    primary: {
      background: "#0d9166",
      color: "white",
      border: "none",
      boxShadow: "0 4px 14px rgba(13,145,102,0.3)",
    },
    outline: {
      background: "transparent",
      color: "#0d9166",
      border: "2px solid #0d9166",
      boxShadow: "none",
    },
  };

  return (
    <button
      className={`rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 ${sizes[size]} ${className}`}
      style={variants[variant]}
      {...props}
    >
      {children}
    </button>
  );
}