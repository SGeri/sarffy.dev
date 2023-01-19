import { InstrictBlogElementType } from ".";

const HeadingClassNames =
  "text-4xl font-bold text-gray-200 py-2 tracking-wide leading-tight text-center";

const Heading = {
  H1: ({ children }: InstrictBlogElementType) => (
    <h1 className={HeadingClassNames}>{children}</h1>
  ),
  H2: ({ children }: InstrictBlogElementType) => (
    <h2 className={HeadingClassNames}>{children}</h2>
  ),
  H3: ({ children }: InstrictBlogElementType) => (
    <h3 className={HeadingClassNames}>{children}</h3>
  ),
  H4: ({ children }: InstrictBlogElementType) => (
    <h4 className={HeadingClassNames}>{children}</h4>
  ),
  H5: ({ children }: InstrictBlogElementType) => (
    <h5 className={HeadingClassNames}>{children}</h5>
  ),
};

export default Heading;
