import { useEffect } from "react";
import scrollEventFadeInUp from "utils/scrollEvent/scrollEventFadeInUp";

const useFadeIn = (elements: HTMLElement[], addDelayPx: number) => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      scrollEventFadeInUp(elements, addDelayPx)
    );
  }, [elements, addDelayPx]);
};

export default useFadeIn;
