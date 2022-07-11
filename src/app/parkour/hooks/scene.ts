import { Loader, Container, Sprite } from "pixi.js";
import FooterImg from "@/assets/parkour/footer.png";
import SkyImg from "@/assets/parkour/sky.png";
import { BODY_WIDTH } from "@/utils/common";

export function useScene() {
  const loader = new Loader();
  const scene = new Container();
  scene.height = 130;
  scene.zIndex = 1;

  loader
    .add("footer", FooterImg)
    .add("sky", SkyImg)
    .load(() => {
      Array(6)
        .fill(0)
        .forEach((_, i) => {
          const item = new Sprite(loader.resources.footer.texture);
          item.x = item.width * i;
          item.y = BODY_WIDTH - 130;
          scene.addChild(item);
        });

      const sky = new Sprite(loader.resources.sky.texture);
      sky.y = -20;
      sky.height = BODY_WIDTH - 80;
      scene.addChild(sky);
    });
  return { scene };
}
