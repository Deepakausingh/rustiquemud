import React from "react";

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  ...props 
}) => {
  // Variants
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 shadow-md",
    outline:
      "border border-primary text-primary hover:bg-primary/10",
    ghost:
      "text-foreground hover:bg-muted/20",
  };

  // Sizes
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl",
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:ring-primary focus:outline-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
