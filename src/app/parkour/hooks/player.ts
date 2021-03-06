import { Rectangle, Loader, Texture, Ticker, Sprite } from "pixi.js";
import PlayerImg from "@/assets/parkour/player.png";
import { BODY_WIDTH } from "@/utils/common";
import { Tweener, Easing } from "pixi-tweener";

const PlayerTexturePosition = [
  // run
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
  // slide
  [862, 113, 130, 120],
  // jump
  [370, 115, 100, 115],
  [670, 115, 100, 115],
  [470, 115, 100, 115],
  [570, 115, 100, 115],
  [772, 115, 92, 115],
];

export class Player extends Sprite {
  defaultY = BODY_WIDTH - 160;
  textures: Texture[] = [];
  status: "run" | "jump" | "slide" = "run";
  ticker = new Ticker();

  constructor() {
    super();
    this.width = 80;
    this.height = 80;
    this.x = -120;
    this.y = this.defaultY;
    this.zIndex = 10;
    this.loader();
    this.watchEvent();
  }

  private loader() {
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

  private watchEvent() {
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }

  private clearEvent() {
    document.removeEventListener("keyup", this.keydown);
    document.removeEventListener("keydown", this.keyup);
  }

  private keydown = (e: any) => {
    if (e.code === "ArrowUp") {
      this.status = "jump";
      if (this.y === this.defaultY) {
        Tweener.add(
          { target: this, duration: 0.3, ease: Easing.easeInOutQuint },
          { y: this.y - 120 }
        );
      }
    } else if (e.code === "ArrowDown") {
      this.status = "slide";
      this.texture = this.textures[10];
    }
  };

  private keyup = () => {
    this.status = "run";
  };

  stop() {
    this.ticker.stop();
    this.clearEvent();
  }

  play() {
    this.ticker.autoStart = true;
    const runTicker = () => {
      this.down();
      this.entrance();
      if (this.status === "run") this.run();
      else if (this.status === "jump") this.jump();
    };
    this.ticker.add(runTicker);
  }

  // ???
  run() {
    this.texture = this.textures[Math.floor(Date.now() / 100) % 8];
  }

  jump() {
    this.texture = this.textures[(Math.floor(Date.now() / 100) % 5) + 11];
  }

  // ??????
  down() {
    if (this.y < this.defaultY) {
      this.status = "jump";
      this.y += 5;
    } else {
      if (this.status === "jump") {
        this.status = "run";
      }
    }
  }

  // ??????
  entrance() {
    if (this.x < 120) this.x += 5;
  }
}
