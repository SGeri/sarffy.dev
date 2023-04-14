import { InstrictBlogElementType } from ".";

const Ul = ({ children }: InstrictBlogElementType) => (
  <ul className="list-disc px-10">{children}</ul>
);

export default Ul;
