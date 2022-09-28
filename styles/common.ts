const breakpoints = [576, 639, 992, 1200];

export const mediaQuery = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);
