import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { SiDiscord, SiSpotify } from "react-icons/si";
import { Meta, Navbar, Socials } from "@components";

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
    text: "Discord",
    href: "https://discord.com/SGeri",
    component: SiDiscord,
  },
  {
    text: "Youtube",
    href: "https://www.youtube.com/@SGeri",
    component: AiFillYoutube,
  },
  {
    text: "Spotify",
    href: "https://open.spotify.com/user/21ahpetfjoq2rjzfsraan72ea",
    component: SiSpotify,
  },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />

      <Navbar links={links} />

      <Component {...pageProps} />

      <Socials icons={icons} />
    </>
  );
}
