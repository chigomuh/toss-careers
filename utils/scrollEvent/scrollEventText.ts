const scrollEventText =
  (elements: HTMLElement[], topParentElement: HTMLElement) => () => {
    const { clientHeight: topParentElementClientHeight } = topParentElement;
    const { innerHeight, screenY } = window;
    const { top } = topParentElement.getBoundingClientRect();
    const { length } = elements;

    elements.forEach((element, idx) => {
      if (top <= 0) {
        const totalScrollableSpace = topParentElementClientHeight - innerHeight;
        const scrollableSpace = totalScrollableSpace / length;
        const movableSpace = screenY - top - scrollableSpace * idx;

        const secondPerTransformY = (60 / totalScrollableSpace) * length;
        const secondPerOpacity = (0.5 / totalScrollableSpace) * length;
        const currentTransformY = movableSpace * -secondPerTransformY + 30;
        const translateY = currentTransformY;
        let currentOpacity = movableSpace * secondPerOpacity * (length + 1);

        currentOpacity =
          currentTransformY <= 0 ? 2 - currentOpacity : currentOpacity;

        element.style.opacity = `${currentOpacity}`;
        element.style.transform = `translateY(${translateY}px)`;
      }
    });
  };

export default scrollEventText;
