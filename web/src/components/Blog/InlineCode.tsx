import { InstrictBlogElementType } from ".";

//todo better way of code highlighting

const InlineCode = ({ children }: InstrictBlogElementType) => (
  <code className="bg-gray-800 p-1 rounded-md">{children}</code>
);

export default InlineCode;
