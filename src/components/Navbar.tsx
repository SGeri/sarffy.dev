import { useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiraCodeFont } from "@fonts";
import { useToggle, useWindowSize } from "@utils";

export interface NavbarProps {
  links: Link[];
}

interface Link {
  text: string;
  href: string;
}

export default function Navbar({ links }: NavbarProps) {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const [opened, toggle] = useToggle(false);
  const { isMobile } = useWindowSize();

  const linkElements = links.map(({ text, href }, index) => {
    const displayNumber = (index > 10 ? `${index + 1}` : `0${index + 1}`) + ".";

    return (
      <Link
        key={index}
        href={href}
        scroll={false}
        onClick={toggle}
        className={clsx(
          "flex flex-row mr-5 text-sm transition-all hover:scale-[1.15]",
          isMobile && "text-lg",
          FiraCodeFont.className
        )}
      >
        <h1 className="text-green-400 mr-2">{displayNumber}</h1>
        <h1 className="text-sky-400">{text}</h1>
      </Link>
    );
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        opened &&
        mobileMenuRef.current &&
        burgerRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        toggle();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef, opened, toggle]);

  return (
    <nav
      className={clsx(
        "navbar w-full h-20 flex flex-row justify-between items-center bg-slate-900 sticky top-0",
        isMobile ? "px-8" : "px-20"
      )}
    >
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

      {isMobile ? (
        <>
          <div ref={burgerRef} className="z-10">
            <GiHamburgerMenu
              className="transition-all hover:scale-125"
              color="#86efac"
              size={32}
              onClick={toggle}
            />
          </div>

          <div
            ref={mobileMenuRef}
            className={clsx(
              "navbar fixed right-0 top-0 w-[50%] h-screen bg-slate-700 bg-opacity-95 flex flex-col justify-center items-center gap-16 shadow-l-md overflow-y-auto transform transition-transform duration-500 ease-in-out",
              opened ? "translate-x-0" : "translate-x-full"
            )}
          >
            {linkElements}
          </div>
        </>
      ) : (
        <div className="flex flex-row gap-20">{linkElements}</div>
      )}
    </nav>
  );
}
