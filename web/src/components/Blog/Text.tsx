import { InstrictBlogElementType } from ".";

const Text = ({ children }: InstrictBlogElementType) => (
  <p className="text-lg text-gray-400 py-2">{children}</p>
);

export default Text;
