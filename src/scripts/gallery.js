import { Fancybox } from "@fancyapps/ui";
import { useDebug } from "./useDebug";

const [log, logError] = useDebug(false);

log("gallery");

window.addEventListener("DOMContentLoaded", () => {
  try {
    log({
      Fb: Fancybox,
    });

    const imgs = document.querySelectorAll("[data-gallery]");
    const maxIndex = Math.max(
      ...Array.from(imgs).map((img) => img.dataset.gallery)
    );
    const count = maxIndex + 1;

    log({
      imgs,
      maxIndex,
      count,
    });

    const items = [];

    for (let index = 0; index < count; index++) {
      const img = document.querySelector(`[data-gallery="${index}"]`);

      items.push({
        src: img.src,
        type: "image",
      });
    }

    log({
      items,
    });

    imgs.forEach((img) => {
      const index = img.dataset.gallery;

      img.addEventListener("click", () => {
        Fancybox.show(items, {
          startIndex: index,
        });
      });
    });
  } catch (error) {
    logError(error);
  }
});
