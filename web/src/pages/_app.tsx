import "../styles/globals.css";
import type { AppProps } from "next/app";
import Meta from "@components/Meta";
import Navbar from "@components/Navbar";
import Socials from "@components/Socials";

const LINKS = [
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Technologies",
    href: "/tech",
  },
  {
    text: "Projects",
    href: "/references",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />

      <Navbar links={LINKS} />

      <Socials />

      <Component {...pageProps} />
    </>
  );
}
