import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        px-7 py-3 rounded-xl font-semibold
        transition-all duration-300

        ${
          variant === "primary"
            ? "bg-black text-white hover:bg-gray-800"
            : "border border-black hover:bg-black hover:text-white"
        }

        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}