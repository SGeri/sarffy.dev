import { useState } from "react";

export default function useWindowSize(initialValue?: boolean) {
  const [value, setValue] = useState<boolean>(initialValue || false);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle] as const;
}
