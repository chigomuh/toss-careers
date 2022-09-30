const scrollVideoPlay = (
  element: HTMLVideoElement,
  other: {
    fixed?: HTMLElement[];
    opacity?: HTMLElement[];
  } = {}
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
        const currentOpacity = 1 - scrollY / emptySpace;

        if (currentTime === duration) {
          style.position = "absolute";
          style.transform = `translateY(${emptySpace}px)`;

          other.fixed?.forEach((el) => {
            el.style.position = "absolute";
            el.style.transform = `translateY(${emptySpace}px)`;
          });

          other.opacity?.forEach((el) => {
            el.style.opacity = "0";
          });
        } else {
          style.position = "fixed";
          style.transform = "none";

          other.fixed?.forEach((el) => {
            el.style.position = "fixed";
            el.style.transform = "none";
          });

          other.opacity?.forEach((el) => {
            el.style.opacity = `${currentOpacity}`;
          });
        }

        element.currentTime = currentSecond;
      }
    }
  };
};

export default scrollVideoPlay;
