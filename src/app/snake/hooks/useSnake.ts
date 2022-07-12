import { BODY_HEIGHT, BODY_WIDTH } from "@/utils/common";
import { Application, Container, Graphics, Ticker } from "pixi.js";

const BASE_COUNT = 50;

export function useSnake() {
  const containerRef = ref();
  const app = new Application({
    width: BODY_HEIGHT,
    height: BODY_HEIGHT,
    backgroundColor: 0xffffff,
  });

  const snake = new Snake();

  snake.draw();
  snake.update();

  const graphics = new Graphics();
  graphics.beginFill(0x000ff0);
  graphics.drawRect(
    100,
    100,
    BODY_HEIGHT / BASE_COUNT,
    BODY_HEIGHT / BASE_COUNT
  );
  graphics.endFill();

  app.stage.addChild(graphics);
  app.stage.addChild(snake.container);

  onMounted(() => {
    containerRef && unref(containerRef).appendChild(app.view);
  });

  return { containerRef, app };
}

class Snake {
  body: { x: number; y: number }[] = [{ x: 25, y: 25 }];
  direction = { x: 1, y: 0 };
  size = 1;
  container = new Container();
  graphics = new Graphics();
  ticker = new Ticker();
  width = BODY_HEIGHT / BASE_COUNT;

  constructor() {
    this.addEvent();
  }

  addEvent() {
    document.addEventListener("keydown", (e) => {
      let x = 0,
        y = 0;
      switch (e.code) {
        case "ArrowUp":
          y = -1;
          break;
        case "ArrowLeft":
          x = -1;
          break;
        case "ArrowRight":
          x = 1;
          break;
        default:
          x = this.direction.x;
          y = this.direction.y;
          break;
      }
      this.direction = { x, y };
    });
  }

  draw() {
    const graphics = new Graphics();
    graphics.beginFill(0xff00ff);
    this.body.forEach((position) => {
      graphics.drawRect(
        position.x * this.width,
        position.y * this.width,
        this.width,
        this.width
      );
    });
    graphics.endFill();
    this.graphics = graphics;
  }

  update() {
    const snakeTicker = () => {
      const first = this.body[0];
      this.body.unshift({
        x: first.x + this.direction.x,
        y: first.y + this.direction.y,
      });
      while (this.body.length > this.size) {
        this.body.pop();
      }

      this.container.removeChild(this.graphics);
      this.draw();
      this.container.addChild(this.graphics);
    };

    setInterval(snakeTicker, 1000);
  }
}
