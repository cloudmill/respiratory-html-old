import debounce from "lodash.debounce";
import { useDebug } from "./useDebug";

const DEBOUNCE_DURATION = 100;

const [log, logError] = useDebug(false);

log("rails");

window.addEventListener("DOMContentLoaded", () => {
  try {
    const rails = document.querySelector("[data-rails]");
    const header = document.querySelector("[data-header]");

    log({
      rails,
      header,
    });

    const getHeaderHeight = () => header.getBoundingClientRect().height;

    log({
      hh: getHeaderHeight(),
    });

    const getPx = (number) => `${number}px`;

    const updateRailsTop = () => {
      try {
        const headerHeight = getHeaderHeight();

        rails.style.top = getPx(headerHeight);

        log("updateRailsTop", {
          hh: getHeaderHeight(),
        });
      } catch (error) {
        logError();
      }
    };

    const updateRailsTopDebounce = debounce(updateRailsTop, DEBOUNCE_DURATION);

    updateRailsTopDebounce();

    window.addEventListener("load", updateRailsTopDebounce);
    window.addEventListener("resize", updateRailsTopDebounce);
  } catch (error) {
    logError(error);
  }
});
