import clsx from "clsx";
import { InstrictBlogElementType } from ".";

const HeadingClassNames =
  "font-bold text-gray-200 py-2 tracking-wide leading-tight text-center";

const Heading = {
  H1: ({ children }: InstrictBlogElementType) => (
    <h1 className={clsx(HeadingClassNames, "text-4xl")}>{children}</h1>
  ),
  H2: ({ children }: InstrictBlogElementType) => (
    <h2 className={clsx(HeadingClassNames, "text-2xl")}>{children}</h2>
  ),
  H3: ({ children }: InstrictBlogElementType) => (
    <h3 className={clsx(HeadingClassNames, "text-xl")}>{children}</h3>
  ),
  H4: ({ children }: InstrictBlogElementType) => (
    <h4 className={clsx(HeadingClassNames, "text-lg")}>{children}</h4>
  ),
  H5: ({ children }: InstrictBlogElementType) => (
    <h5 className={clsx(HeadingClassNames, "text-md")}>{children}</h5>
  ),
};

export default Heading;
