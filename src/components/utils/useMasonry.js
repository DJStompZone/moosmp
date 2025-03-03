import { useEffect, useRef } from "react";

const useMasonry = () => {
  const masonryContainer = useRef(null);

  useEffect(() => {
    const handleMasonry = () => {
      if (!masonryContainer.current) return;

      const items = Array.from(masonryContainer.current.children);
      let gapSize = 0;

      if (masonryContainer.current) {
        gapSize = parseInt(
          window.getComputedStyle(masonryContainer.current).getPropertyValue("grid-row-gap"),
          10
        );
      }

      items.forEach((el) => {
        if (!(el instanceof HTMLElement)) return;

        let previous = el.previousElementSibling;
        while (previous) {
          if (previous instanceof HTMLElement && elementLeft(previous) === elementLeft(el)) {
            el.style.marginTop = `${-(elementTop(el) - elementBottom(previous) - gapSize)}px`;
            break;
          }
          previous = previous.previousElementSibling;
        }
      });
    };

    handleMasonry();
    window.addEventListener("resize", handleMasonry);

    return () => {
      window.removeEventListener("resize", handleMasonry);
    };
  });

  const elementLeft = (el) => el.getBoundingClientRect().left;
  const elementTop = (el) => el.getBoundingClientRect().top + window.scrollY;
  const elementBottom = (el) => el.getBoundingClientRect().bottom + window.scrollY;

  return masonryContainer;
};

export default useMasonry;
