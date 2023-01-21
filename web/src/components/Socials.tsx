import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";

// TODO
// use Icon.text as a small popup on hover
// fix social links

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
    <li
      className={clsx(
        "w-full h-auto bottom-0 left-0 fixed flex flex-row justify-between items-center content-end p-4 gap-8 bg-slate-700",
        "md:w-24 md:flex-col md:px-0 md:bg-transparent"
      )}
    >
      {iconElements}
    </li>
  );
}
