import { Rectangle, Loader, Texture, Ticker, Sprite } from "pixi.js";
import PlayerImg from "@/assets/parkour/player.png";
import { BODY_HEIGHT, BODY_WIDTH } from "@/utils/common";

const PlayerTexturePosition = [
  [0, 0, 105, 115],
  [106, 0, 104, 115],
  [211, 0, 104, 115],
  [316, 0, 104, 115],
  [316, 0, 104, 115],
  [423, 0, 109, 115],
  [534, 0, 114, 115],
  [650, 0, 114, 115],
  [766, 0, 104, 115],
  [873, 0, 130, 113],
];

export class Player extends Sprite {
  textures: Texture[] = [];
  constructor() {
    super();
    this.y = BODY_WIDTH - 200;
    this.zIndex = 10;
    this.loader();
  }

  loader() {
    const loader = new Loader();
    loader.add("player", PlayerImg).load((_, resources) => {
      PlayerTexturePosition.forEach((position, i) => {
        const texture = new Texture(
          resources.player.texture as any,
          new Rectangle(...position)
        );
        this.textures.push(texture);
      });
    });
  }

  run() {
    const ticker = new Ticker();
    ticker.autoStart = true;
    const runTicker = () => {
      this.texture = this.textures[Math.floor(Date.now() / 100) % 8];
    };
    ticker.add(runTicker);
  }
}
