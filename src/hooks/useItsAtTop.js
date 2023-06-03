import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          console.log("SetToTrue");
          setScrollPos(true);
        } else {
          console.log("SetToFalse");
          setScrollPos(false);
        }
      });
    }
  }, [window.pageYOffset]);
  return { scrollPos };
};
