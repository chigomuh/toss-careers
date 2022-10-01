const scrollEventVideo =
  (element: HTMLVideoElement, topParentElement: HTMLElement) => () => {
    const { innerHeight } = window;
    const { duration } = element;
    const { top } = topParentElement.getBoundingClientRect();

    if (top >= 0) return;

    const { clientHeight: topParentClientHeight } = topParentElement;
    const emptySpace = topParentClientHeight - innerHeight;
    const movableSpace = -top;
    const secondPerPx = duration / emptySpace;
    const currentSecond = movableSpace * secondPerPx;

    element.currentTime = currentSecond;
  };

export default scrollEventVideo;
