import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "noBg" | "google";
  size?: "short" | "long" | "full";
  className?: string;
};
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  size = "short",
  className = "",
}) => {
  let sizeClass =
    size === "long" ? "w-64" : size === "full" ? "w-full" : "w-32";
  let variantClass =
    variant === "noBg"
      ? "bg-transparent border border-gray-500 text-gray-700 hover:bg-gray-100"
      : variant === "google"
      ? "bg-white border border-gray-300 text-black hover:bg-gray-50"
      : "bg-pink-700 text-white hover:bg-pink-500";
  return (
    <button
      onClick={onClick}
      className={`py-3 px-4 rounded ${sizeClass} ${variantClass} ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};
export default Button;
