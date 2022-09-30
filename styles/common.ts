export const breakpoints = [576, 639, 992, 1600];

export const mediaQuery = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);
