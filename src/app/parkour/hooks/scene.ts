import { Loader, Container, TilingSprite, Texture, Ticker } from "pixi.js";
import FooterImg from "@/assets/parkour/footer.png";
import SkyImg from "@/assets/parkour/sky.png";
import { BODY_HEIGHT, BODY_WIDTH } from "@/utils/common";

export function useScene() {
  const loader = new Loader();
  const scene = new Container();
  scene.height = 130;
  scene.zIndex = 1;
  const ticker = new Ticker();

  loader
    .add("footer", FooterImg)
    .add("sky", SkyImg)
    .load(() => {
      const footer = new TilingSprite(
        loader.resources.footer.texture as Texture,
        BODY_HEIGHT,
        130
      );
      footer.y = BODY_WIDTH - 130;
      footer.zIndex = 2;

      const sky = new TilingSprite(
        loader.resources.sky.texture as Texture,
        BODY_HEIGHT,
        BODY_WIDTH - 80
      );
      sky.tileScale.y = 0.6;
      sky.zIndex = 1;
      sky.y = -30;

      scene.addChild(footer);
      scene.addChild(sky);
      scene.sortChildren();

      const sceneTicker = () => {
        footer.tilePosition.x -= 3;
        sky.tilePosition.x -= 3;
      };

      ticker.add(sceneTicker);
    });

  function runScene() {
    ticker.start();
  }

  function stopScene() {
    ticker.stop();
  }

  return { scene, runScene, stopScene };
}
