import { InstrictBlogElementType } from ".";

const Pre = ({ children }: InstrictBlogElementType) => (
  <pre className="bg-gray-800 p-4 rounded-md">{children}</pre>
);

export default Pre;
