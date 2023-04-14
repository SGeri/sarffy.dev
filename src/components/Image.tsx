import clsx from "clsx";
import { default as BaseImage } from "next/image";

export interface ImageProps {
  variant?: "extra-small" | "small" | "medium" | "large" | "full";
  src: string;
  alt: string;
}

const Image = ({ variant = "medium", src, alt }: ImageProps) => (
  <div className="flex w-full items-center justify-center mb-8">
    <BaseImage
      className={clsx("aspect-auto h-auto", {
        "w-full lg:w-full": variant === "full",
        "lg:w-[80%]": variant === "large",
        "lg:w-[50%]": variant === "medium",
        "lg:w-[30%]": variant === "small",
        "lg:w-[15%]": variant === "extra-small",
      })}
      src={src}
      alt={alt}
      width={1600}
      height={900}
    />
  </div>
);

export default Image;
