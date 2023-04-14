import clsx from "clsx";

export interface TagProps {
  variant?: TagVariants;
  text: string;
  onClick?: () => void;
}

export type TagVariants = "primary";

const Tag = ({ variant = "primary", text, onClick }: TagProps) => (
  <span
    className={clsx(
      "inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2",
      variant === "primary" && "bg-slate-600 text-gray-200",
      onClick && "cursor-pointer"
    )}
    onClick={onClick}
  >
    {text}
  </span>
);

export default Tag;
