import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// A single-page app keeps the old scroll position when the route changes, so a page
// opened from the bottom of the list would also open scrolled to the bottom.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
