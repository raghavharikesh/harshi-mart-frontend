import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <input
        className={`
          w-full h-11 px-4
          rounded-2xl
          border border-slate-200
          bg-white
          text-sm
          outline-none

          focus:ring-2
          focus:ring-emerald-500/20
          focus:border-emerald-500

          transition-all duration-200

          ${error ? "border-red-500" : ""}

          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}