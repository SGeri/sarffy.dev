import clsx from "clsx";
import { ReactNode, useState } from "react";

export interface ButtonProps {
  variant?: ButtonVariants;
  tooltip?: string;
  onClick?: () => void;
  children: ReactNode;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  bg?: string;
}

export enum ButtonVariants {
  primary,
  secondary,
}

const Button = ({
  variant = ButtonVariants.primary,
  tooltip,
  onClick,
  children,
  rounded = "md",
  bg = "bg-slate-600",
}: ButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={clsx(
        "max-w-max p-4 m-2",
        "flex justify-center items-center",
        rounded && `rounded-${rounded}`,
        onClick && "cursor-pointer",
        bg
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
