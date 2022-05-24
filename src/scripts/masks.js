import Swiper, { Navigation, Pagination } from "swiper";
import { useDebug } from "./useDebug";

const SWIPER_SPEED = 500;
const SWIPER_LOOP = true;

const [log, logError] = useDebug(false);

log("masks");

window.addEventListener("DOMContentLoaded", () => {
  try {
    const masks = document.querySelector("[data-masks]");
    const srcJSON = masks.dataset.masksPagination;
    const srcList = JSON.parse(srcJSON);

    log({
      masks,
      srcJSON,
      srcList,
      Sw: Swiper,
    });

    const masksSwiper = new Swiper(masks, {
      modules: [Navigation, Pagination],

      loop: SWIPER_LOOP,
      speed: SWIPER_SPEED,

      slidesPerView: "auto",

      navigation: {
        nextEl: "[data-masks-next]",
        prevEl: "[data-masks-prev]",
      },

      pagination: {
        el: ".masks__bullets-list",
        clickable: true,

        renderBullet: (index, className) => {
          // count of bullets relative to slide size (& slides count)

          return `
            <div class="masks__bullet ${className}">
              <img class="masks__bullet-img" src="${srcList[index]}" />
            </div>
          `;
        },
      },
    });
  } catch (error) {
    logError(error);
  }
});
