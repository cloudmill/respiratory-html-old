import Swiper, { Navigation } from "swiper";
import { useDebug } from "./useDebug";

const SWIPER_SPEED = 500;
const SWIPER_LOOP = true;

const [log, logError] = useDebug(false);

log("usgkhj");

window.addEventListener("DOMContentLoaded", () => {
  try {
    const usgkhj = document.querySelector("[data-usgkhj]");
    const usgkhjPrev = document.querySelector("[data-usgkhj-prev]");
    const usgkhjNext = document.querySelector("[data-usgkhj-next]");

    log({
      usgkhj,
      usgkhjPrev,
      usgkhjNext,
      Sw: Swiper,
    });

    const usgkhjSwiper = new Swiper(usgkhj, {
      modules: [Navigation],

      loop: SWIPER_LOOP,
      speed: SWIPER_SPEED,

      slidesPerView: "auto",

      allowTouchMove: false,

      navigation: {
        nextEl: usgkhjNext,
        prevEl: usgkhjPrev,
      },
    });
  } catch (error) {
    logError(error);
  }
});
