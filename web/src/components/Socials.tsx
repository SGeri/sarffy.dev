import Link from "next/link";
import { IconType } from "react-icons";

// TODO
// use Icon.text as a small popup on hover

export interface SocialsProps {
  icons: Icon[];
}

export interface Icon {
  text: string;
  href: string;
  component: IconType;
}

export default function Socials({ icons }: SocialsProps) {
  const iconElements = icons.map(({ text, href, component: Icon }, index) => {
    return (
      <ul key={index} className="hover:translate-x-2 transition-all">
        <Link href={href}>
          <Icon size={42} color="white" />
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
