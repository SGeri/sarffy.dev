import { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "./Image";
import Heading from "./Heading";
import Text from "./Text";
import Pre from "./Pre";
import InlineCode from "./InlineCode";
import Ul from "./Ul";
import Li from "./Li";

// todo add more elements like a, ul, ol, li, etc.
const BlogElements = {
  img: Image,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  p: Text,
  pre: Pre,
  code: InlineCode,
  ul: Ul,
  li: Li,
};

export type InstrictBlogElementType = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export default BlogElements;
