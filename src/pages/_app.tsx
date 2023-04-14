import type { AppProps } from "next/app";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiSpotify } from "react-icons/si";
import { Meta, Navbar, Socials, Footer } from "@components";

import "../styles/globals.css";

const links = [
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Technologies",
    href: "/#tech",
  },
  {
    text: "Projects",
    href: "/#references",
  },
  {
    text: "About",
    href: "/#about",
  },
  {
    text: "Contact",
    href: "/#contact",
  },
];

const icons = [
  {
    text: "Github",
    href: "https://github.com/SGeri",
    component: AiFillGithub,
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/gergő-sárffy-b44870240/",
    component: AiFillLinkedin,
  },
  {
    text: "Facebook",
    href: "https://www.facebook.com/sarffygeri",
    component: AiFillFacebook,
  },
  {
    text: "Spotify",
    href: "https://open.spotify.com/user/21ahpetfjoq2rjzfsraan72ea",
    component: SiSpotify,
  },
];

// add nicer scroll bar
// add animations on load and on scroll
// interactive sticky navbar?
// add global loader for page transitions?
// add translations?

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />

      <Navbar links={links} />

      <Component {...pageProps} />

      <Footer />

      <Socials icons={icons} />
    </>
  );
}
