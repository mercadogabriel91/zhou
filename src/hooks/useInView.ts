import { useEffect, useState, type RefObject } from "react";

type UseInViewOptions = {
  rootMargin?: string;
  threshold?: number | number[];
};

export function useInView(
  ref: RefObject<Element | null>,
  { rootMargin = "0px", threshold = 0.35 }: UseInViewOptions = {},
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold]);

  return inView;
}
