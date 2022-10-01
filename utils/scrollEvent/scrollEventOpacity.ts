const scrollEventOpacity =
  (element: HTMLElement, topParentElement: HTMLElement) => () => {
    const { scrollY, innerHeight } = window;
    const { clientHeight: topParentElementHeight } = topParentElement;
    const scrollableSpace = topParentElementHeight - innerHeight;

    const opacity = 1 - scrollY / scrollableSpace;

    if (opacity >= 0) {
      element.style.opacity = `${opacity}`;
      return;
    }
    element.style.opacity = "0";
  };

export default scrollEventOpacity;
