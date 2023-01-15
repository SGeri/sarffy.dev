import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 1024;

export interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize.width < MOBILE_MAX_WIDTH;

  return { isMobile, ...windowSize };
}
