/**
 * screens: {
 *       'sm': '640px',
 *       // => @media (min-width: 640px) { ... }
 *
 *       'md': '768px',
 *       // => @media (min-width: 768px) { ... }
 *
 *       'lg': '1024px',
 *       // => @media (min-width: 1024px) { ... }
 *
 *       'xl': '1280px',
 *       // => @media (min-width: 1280px) { ... }
 *
 *       '2xl': '1536px',
 *       // => @media (min-width: 1536px) { ... }
 *     }
 */
import useBreakpoint from "use-breakpoint";


const BREAKPOINTS = { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536  }

export const useGetBreakpoint = (breakpoint?: keyof typeof BREAKPOINTS) => useBreakpoint(BREAKPOINTS, breakpoint);
