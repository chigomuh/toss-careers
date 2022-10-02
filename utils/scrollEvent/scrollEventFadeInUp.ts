const scrollEventFadeInUp =
  (refArr: HTMLElement[], addDelayPx: number = 0) =>
  () =>
    refArr.forEach((element) => {
      const { top } = element.getBoundingClientRect();
      const { innerHeight } = window;
      const fromTop = top - innerHeight + addDelayPx;

      if (fromTop > 0) return;

      if (element.classList.contains("animationFadeInUp")) return;

      element.classList.add("animationFadeInUp");
    });

export default scrollEventFadeInUp;
