export const breakpointNames = {
  smartPhoneMin: 'smartphone-min',
  tableMin: 'table-min',
  laptopsMin: 'laptops-min',
  desktopMin: 'desktop-min',
  tvMin: 'tv-min',

  smartPhoneMax: 'smartphone-max',
  tableMax: 'table-max',
  laptopsMax: 'laptops-max',
  desktopMax: 'desktop-max',
  tvMax: 'tv-max',
} as const;

export type KeyBreakpoints =
  typeof breakpointNames[keyof typeof breakpointNames];

export const breakpoints: Record<KeyBreakpoints, string> = {
  [breakpointNames.smartPhoneMin]: '(min-width: 480px)',
  [breakpointNames.tableMin]: '(min-width: 768px)',
  [breakpointNames.laptopsMin]: '(min-width: 1024px)',
  [breakpointNames.desktopMin]: '(min-width: 1200px)',
  [breakpointNames.tvMin]: '(min-width: 1420px)',

  [breakpointNames.smartPhoneMax]: '(max-width: 480px)',
  [breakpointNames.tableMax]: '(max-width: 768px)',
  [breakpointNames.laptopsMax]: '(max-width: 1024px)',
  [breakpointNames.desktopMax]: '(max-width: 1200px)',
  [breakpointNames.tvMax]: '(max-width: 1420px)',
};
