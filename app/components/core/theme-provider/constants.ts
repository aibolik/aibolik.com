
export const breakpoints = {
  /**
   * Bigger than tablet, almost desktop-like devices
   * 
   */ 
  mdAndLarger: `(min-width: 769px)`,

  /**
   * Tablet and smaller devices(mobile)
   */
  mdAndSmaller: `(max-width: 768px)`,


  smallDesktop: `(min-width: 769px) and (max-width: 1023px)`,

  largeDesktop: `(min-width: 1024px)`,

  /**
   * Generic breakpoints for most of things
   * to be divided mobile/desktop
   */
  mobile: `(max-width: 768px)`,
  desktop: `(min-width: 769px)`,
};