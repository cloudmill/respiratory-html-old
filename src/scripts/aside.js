import debounce from "lodash.debounce";

const DEBOUNCE_DURATION = 100;

const DEBUG = false;

const log = (...msgs) => DEBUG && console.log(...msgs);
const logError = (...msgs) => DEBUG && console.error(...msgs);

log("aside");

window.addEventListener("DOMContentLoaded", () => {
  try {
    const aside = document.querySelector("[data-aside]");
    const header = document.querySelector("[data-header]");
    const panel = document.querySelector("[data-panel]");

    log({
      aside,
      header,
      panel,
    });

    const getWindowHeight = () => document.documentElement.clientHeight;
    const getHeaderHeight = () => header.getBoundingClientRect().height;
    const getPanelHeight = () => panel.getBoundingClientRect().height;

    log({
      wh: getWindowHeight(),
      hh: getHeaderHeight(),
      ph: getPanelHeight(),
    });

    const getAsideHeight = () => {
      const windowHeight = getWindowHeight();
      const headerHeight = getHeaderHeight();
      const paneHeight = getPanelHeight();

      const asideHeight = windowHeight - (headerHeight + paneHeight);

      return asideHeight;
    };

    log({
      ah: getAsideHeight(),
    });

    const getPx = (number) => `${number}px`;

    const updatePanelHeight = () => {
      const asideHeight = getAsideHeight();

      aside.style.height = getPx(asideHeight);

      log("updatePanelHeight", {
        ah: asideHeight,
      });
    };

    const updatePanelDebounce = debounce(updatePanelHeight, DEBOUNCE_DURATION);

    updatePanelDebounce();

    window.addEventListener("load", updatePanelDebounce);
    window.addEventListener("resize", updatePanelDebounce);
  } catch (error) {
    logError(error);
  }
});
