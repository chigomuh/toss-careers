const scrollVideoPlay = (
  element: HTMLVideoElement,
  other: HTMLElement[] = []
) => {
  return () => {
    if (element) {
      const { scrollY, innerHeight } = window;
      const { parentElement, duration, style, currentTime } = element;

      if (parentElement) {
        const { clientHeight } = parentElement;
        const emptySpace = clientHeight - innerHeight;
        const secondPerPx = duration / emptySpace;
        const currentSecond = scrollY * secondPerPx;

        if (currentTime === duration) {
          style.position = "absolute";
          style.transform = `translateY(${emptySpace}px)`;

          other.forEach((el) => {
            el.style.position = "absolute";
            el.style.transform = `translateY(${emptySpace}px)`;
          });
        } else {
          style.position = "fixed";
          style.transform = "none";

          other.forEach((el) => {
            el.style.position = "fixed";
            el.style.transform = "none";
          });
        }
        element.currentTime = currentSecond;
      }
    }
  };
};

export default scrollVideoPlay;
