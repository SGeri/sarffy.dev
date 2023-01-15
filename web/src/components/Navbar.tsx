import clsx from "clsx";
import Link from "next/link";
import { Fira_Code } from "@next/font/google";

const FiraCodeFont = Fira_Code({ weight: "400" });

export interface NavbarProps {
  links: Link[];
}

interface Link {
  text: string;
  href: string;
}

export default function Navbar({ links }: NavbarProps) {
  const linkElements = links.map(({ text, href }, index) => {
    const displayNumber = (index > 10 ? `${index + 1}` : `0${index + 1}`) + ".";

    return (
      <Link
        key={index}
        href={href}
        className={clsx(
          "flex flex-row mr-5 text-sm transition-all hover:scale-[1.15]",
          FiraCodeFont.className
        )}
      >
        <h1 className="text-green-400 mr-2">{displayNumber}</h1>
        <h1 className="text-sky-400">{text}</h1>
      </Link>
    );
  });

  return (
    <nav className="w-full h-20 flex flex-row justify-between items-center px-20 bg-slate-900 sticky top-0">
      <div>
        <Link href="/">
          <h1
            className={clsx(
              "text-lg text-white tracking-widest link-underline link-underline-black",
              FiraCodeFont.className
            )}
          >
            sarffy.dev
          </h1>
        </Link>
      </div>
      <div className="flex flex-row gap-2">{linkElements}</div>
    </nav>
  );
}
