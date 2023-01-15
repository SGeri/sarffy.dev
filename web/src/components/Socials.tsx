import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { SiDiscord, SiSpotify } from "react-icons/si";

// TODO
// use Icon.text as a small popup on hover

const icons = [
  {
    text: "Github",
    href: "https://github.com/SGeri",
    component: AiFillGithub,
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/geri-sarffy/",
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
    href: "https://open.spotify.com/user/SGeri",
    component: SiSpotify,
  },
];

export default function Socials() {
  const iconElements = icons.map(({ text, href, component: Icon }, index) => {
    return (
      <ul>
        <Link key={index} href={href}>
          <Icon size={42} color="grey" />
        </Link>
      </ul>
    );
  });

  return (
    <li className="w-24 h-auto bottom-0 left-0 absolute flex flex-col items-center content-end p-4 gap-4">
      {iconElements}
    </li>
  );
}
