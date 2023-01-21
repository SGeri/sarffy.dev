import Link from "next/link";

const Footer = () => (
  <footer className="h-20 flex flex-col justify-center items-center gap-2 text-gray-300 mb-20 md:mb-2">
    <h1>
      Design heavily inspired by{" "}
      <Link href="https://brittanychiang.com" className="text-green-500">
        Brittany Chiang
      </Link>
    </h1>
    <h1>
      Built by{" "}
      <Link href="/" className="text-green-500">
        Sárffy Gergő
      </Link>
    </h1>
  </footer>
);

export default Footer;
