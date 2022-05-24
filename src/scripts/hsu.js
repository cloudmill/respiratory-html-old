import Swiper, { Navigation } from "swiper";
import { useDebug } from "./useDebug";

const SWIPER_SPEED = 500;
const SWIPER_LOOP = false;

const [log, logError] = useDebug(true);

log("hsu");

window.addEventListener("DOMContentLoaded", () => {
  try {
    const component = document.querySelector("[data-hsu-component]");
    const prev = document.querySelector("[data-hsu-prev]");
    const next = document.querySelector("[data-hsu-next]");

    log({
      component,
      prev,
      next,

      Sw: Swiper,
    });

    const swiper = new Swiper(component, {
      modules: [Navigation],

      loop: SWIPER_LOOP,
      speed: SWIPER_SPEED,

      slidesPerView: "auto",

      allowTouchMove: false,

      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  } catch (error) {
    logError(error);
  }
});
