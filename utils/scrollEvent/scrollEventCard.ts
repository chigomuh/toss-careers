const scrollEventCard =
  (elements: HTMLElement[], topParentElement: HTMLElement) => () => {
    elements.forEach((element, idx) => {
      const { top } = topParentElement.getBoundingClientRect();

      const { clientHeight } = topParentElement;

      if (top <= 0) {
        /**
         * translateX(0) -> translateX(400px)
         * translateY(0) -> translateY(-200px)
         * opacity: 1 -> opacity: 0
         *
         * section height: clientHeight
         * current scroll percentage : -top / clientHeight
         * translateX: 400px * -top / clientHeight
         * translateY: -200px * -top / clientHeight
         * opacity: 1 - -top / clientHeight
         */
        const elementInitTransform = {
          translateX: 0,
          translateY: idx * 18,
          scale: 1 - idx / 30,
          opacity: idx === 0 ? 1 : 0.5,
        };
        const cardMovableSpace = clientHeight / 11;
        const elementMovableTop = top + cardMovableSpace * idx;
        const currentPercentage = -elementMovableTop / cardMovableSpace;
        const translateX = 400 * currentPercentage;
        const translateY = -200 * currentPercentage;
        const rotate = 35 * currentPercentage;
        const opacity = 1 - currentPercentage;
        const scale = 1;

        if (currentPercentage >= 0 && currentPercentage <= 1) {
          element.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`;
          element.style.opacity = `${opacity}`;
        } else if (currentPercentage > 1) {
          element.style.transform = `translateX(400px) translateY(-200px) rotate(35deg) scale(1)`;
          element.style.opacity = `0`;
        } else {
          const scale =
            elementInitTransform.scale +
            (currentPercentage + 1) * (1 - elementInitTransform.scale);
          const translateY =
            elementInitTransform.translateY +
            (currentPercentage + 1) * (1 - elementInitTransform.translateY);

          if (scale >= elementInitTransform.scale && scale <= 1) {
            element.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          }

          element.style.opacity = `${idx === 0 ? 1 : 0.5}`;
        }
      } else {
        element.style.transform = `scale(${
          1 - idx / 30
        }) translateX(0) translateY(${idx * 18}px) rotate(0deg)`;
        element.style.opacity = `1`;
      }
    });
  };

export default scrollEventCard;
