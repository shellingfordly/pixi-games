import { BODY_HEIGHT, BODY_WIDTH } from "@/utils/common";
import { Application, Container } from "pixi.js";
import { Player } from "./player";
import { useScene } from "./scene";
import { Tweener } from "pixi-tweener";

export function useParkour() {
  const containerRef = ref();
  const app = new Application({
    width: BODY_HEIGHT,
    height: BODY_WIDTH,
    backgroundColor: 0xffffff,
  });

  Tweener.init(app.ticker);

  const container = new Container();
  app.stage.addChild(container);

  const player = new Player();
  const { scene, runScene } = useScene();
  container.addChild(player);
  container.addChild(scene);

  container.sortChildren();

  player.play();
  runScene();

  onMounted(() => {
    if (containerRef.value) containerRef.value.appendChild(app.view);
  });

  return { containerRef, app };
}
