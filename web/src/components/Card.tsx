import clsx from "clsx";
import Image from "next/image";
import Tag, { TagProps } from "./Tag";

export interface CardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  tagProps?: TagProps;
  onClick?: () => void;
}

const Card = ({
  title,
  description,
  image = "/images/dummy.webp",
  imageAlt = "Dummy Picture",
  tags,
  tagProps,
  onClick,
}: CardProps) => (
  <div
    className={clsx(
      "max-w-sm rounded-xl overflow-hidden shadow-2xl m-3 border-2 border-slate-800",
      onClick && "cursor-pointer"
    )}
    {...(onClick && { onClick })}
  >
    <Image
      src={image}
      alt={imageAlt}
      className="w-full"
      width={192}
      height={108}
    />

    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-gray-300">{title}</div>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {tags?.map((text, index) => (
        <Tag key={index} text={text} {...tagProps} />
      ))}
    </div>
  </div>
);

export default Card;
