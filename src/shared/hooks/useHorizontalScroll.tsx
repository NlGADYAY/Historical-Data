import { useEffect, useRef, useState } from "react";

type TScrollDirection = "left" | "right";

export function useHorizontalScroll(scrollStep = 350) {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollWidth - el.scrollLeft > el.clientWidth + 1);
    };

    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction: TScrollDirection) => {
    ref.current?.scrollBy({
      left: direction === "left" ? -scrollStep : scrollStep,
      behavior: "smooth",
    });
  };

  return { ref, canScrollLeft, canScrollRight, scroll };
}
