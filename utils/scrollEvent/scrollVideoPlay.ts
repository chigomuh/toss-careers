const scrollVideoPlay = (
  element: HTMLVideoElement,
  top: number,
  addSpace: number = 0,
  other: {
    opacity?: HTMLElement[];
    transform?: HTMLElement[];
  } = {},
  breakpoint: number = 0
) => {
  return () => {
    if (element) {
      const { scrollY, innerHeight } = window;
      const {
        parentElement,
        duration,
        currentTime,
        clientHeight: videoClientHeight,
      } = element;

      if (parentElement) {
        const { style: parentStyle } = parentElement;
        const isDeskTop = window.innerWidth >= breakpoint;
        const totalTop = isDeskTop ? top + addSpace : top;

        if (totalTop < scrollY) {
          if (parentElement && parentElement.parentElement) {
            const { clientHeight: sectionClientHeight, style: sectionStyle } =
              parentElement.parentElement;
            const emptySpace = sectionClientHeight - innerHeight;
            const movableSpace = scrollY - totalTop;
            const secondPerPx = duration / emptySpace;
            const currentSecond = movableSpace * secondPerPx;
            const currentOpacity = 1 - movableSpace / emptySpace;

            if (currentTime === duration) {
              // if (window.innerWidth >= breakpoint) {
              //   sectionStyle.marginBottom = `${
              //     videoClientHeight - innerHeight
              //   }px`;
              // }

              parentStyle.position = "absolute";
              parentStyle.transform = `translateY(${emptySpace}px)`;

              other.opacity?.forEach((el) => {
                el.style.opacity = "0";
              });
            } else {
              parentStyle.position = "fixed";
              parentStyle.transform = "none";

              other.opacity?.forEach((el) => {
                el.style.opacity = `${currentOpacity}`;
              });

              if (other.transform) {
                const [el1, el2, el3] = other.transform;
                const h = emptySpace / other.transform.length;

                transformOpacityTextElement(el1, emptySpace, movableSpace);
                transformOpacityTextElement(el2, emptySpace, movableSpace - h);
                transformOpacityTextElement(
                  el3,
                  emptySpace,
                  movableSpace - h * 2
                );
              }
            }

            element.currentTime = currentSecond;
          }
        } else {
          parentStyle.position = "absolute";
        }
      }
    }
  };
};

export default scrollVideoPlay;

const transformOpacityTextElement = (
  element: HTMLElement,
  emptySpace: number,
  movableSpace: number
) => {
  const secondPerTransformY = (60 / emptySpace) * 3;
  const secondPerOpacity = (0.5 / emptySpace) * 3;
  const currentTransformY = movableSpace * -secondPerTransformY + 30;
  let currentOpacity = movableSpace * secondPerOpacity * 4;

  if (currentTransformY <= 0) {
    currentOpacity = 2 - currentOpacity;
  } else {
    currentOpacity = currentOpacity;
  }

  const translateY = currentTransformY;

  element.style.opacity = `${currentOpacity}`;
  element.style.transform = `translateY(${translateY}px)`;
};
