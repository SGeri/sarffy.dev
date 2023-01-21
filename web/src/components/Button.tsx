import clsx from "clsx";
import { ReactNode, useState } from "react";

export interface ButtonProps {
  variant?: ButtonVariants;
  tooltip?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  bg?: string;
}

export type ButtonVariants = "primary" | "outline";

const Button = ({
  variant = "primary",
  tooltip,
  onClick,
  children,
  className,
  rounded = "md",
  bg = "bg-slate-600",
}: ButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={clsx(
        "max-w-max p-4 m-2",
        "flex justify-center items-center",
        "transition-all hover:scale-105",
        rounded && `rounded-${rounded}`,
        onClick && "cursor-pointer",
        variant == "primary" && bg,
        variant == "outline" && "border-2 border-green-500",
        className
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...(onClick && { onClick })}
    >
      {tooltip && (
        <div
          className={clsx(
            "absolute inline-block -translate-y-14 px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm bg-gray-700 transition-opacity",
            hover ? "opacity-100" : "opacity-0"
          )}
        >
          {tooltip}
        </div>
      )}

      {children}
    </div>
  );
};

export default Button;
