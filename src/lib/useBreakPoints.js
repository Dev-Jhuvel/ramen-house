import { useMediaQuery } from "react-responsive";

export function useBreakpoints() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 751px)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return {
    isBigScreen,
    isTabletOrMobile,
    isDesktop,
    isPortrait,
    isMobile,
    isRetina,
  };
}
