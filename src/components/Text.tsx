import { HTMLAttributes } from "react";
import clsx from "clsx";

interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  variant?: "primary" | "secondary" | "title";
  linkTo?: string;
}

const Text = ({ as, variant, linkTo, children, ...props }: TextProps) => {
  const cn = clsx("base-props", "variants", linkTo && "link");

  switch (as) {
    case "h1":
      return (
        <h1 className={cn} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn} {...props}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={cn} {...props}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={cn} {...props}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={cn} {...props}>
          {children}
        </h6>
      );
    case "p":
      return (
        <p className={cn} {...props}>
          {children}
        </p>
      );
    case "span":
      return (
        <span className={cn} {...props}>
          {children}
        </span>
      );
    case "div":
      return (
        <div className={cn} {...props}>
          {children}
        </div>
      );
  }
};

export default Text;
