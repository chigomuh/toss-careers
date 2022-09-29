const scrollVideoPlay = (element: HTMLVideoElement) => {
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
          style.position = "";
          style.transform = `translateY(${emptySpace}px)`;
        } else {
          style.position = "fixed";
          style.transform = "none";
        }
        element.currentTime = currentSecond;
      }
      return;
    }
  };
};

export default scrollVideoPlay;
