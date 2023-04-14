import BaseImage from "next/image";

// todo fix any props because of next/image and instrict image type conflict
const Image = (props: any) => <BaseImage {...props} />;

export default Image;
