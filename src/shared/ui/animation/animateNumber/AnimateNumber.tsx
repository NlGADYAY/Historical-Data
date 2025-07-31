import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type AnimatedNumberProps = {
  value: number;
};

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(value);
  const obj = useRef({ val: value });

  useEffect(() => {
    const animation = gsap.to(obj.current, {
      val: value,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayValue(Math.round(obj.current.val));
        if (spanRef.current) {
          spanRef.current.textContent = Math.round(obj.current.val).toString();
        }
      },
    });

    gsap.fromTo(
      spanRef.current,
      { scale: 1.2, opacity: 0.7 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
    );

    return () => {
      animation.kill();
    };
  }, [value]);

  return <span ref={spanRef}>{displayValue}</span>;
};
