const scrollEventCard =
  (elements: HTMLElement[], topParentElement: HTMLElement) => () => {
    const { length } = elements;

    elements.forEach((element, idx) => {
      const { top } = topParentElement.getBoundingClientRect();
      const { clientHeight } = topParentElement;

      if (top > 0) {
        element.style.transform = `scale(${
          1 - idx / 30
        }) translateX(0) translateY(${idx * 18}px) rotate(0deg)`;
        element.style.opacity = `1`;

        return;
      }

      const elementInitTransform = {
        translateX: 0,
        translateY: idx * 18,
        scale: 1 - idx / 30,
        opacity: idx === 0 ? 1 : 0.5,
      };
      const cardMovableSpace = clientHeight / (length + 2);
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
      }
    });
  };

export default scrollEventCard;
