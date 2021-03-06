import { BODY_HEIGHT, BODY_WIDTH } from "@/utils/common";
import { Loader, Rectangle, Texture, Ticker, Container, Sprite } from "pixi.js";
import TrapImg from "@/assets/parkour/trap.png";
import { hitTestRectangle } from "@/utils/hit";
import { ref } from "vue";

const TrapTexturePosition = [
  [30, 55, 130, 40],
  [250, 40, 130, 50],
  [35, 280, 130, 60],
];

export function useHurdle() {
  const loader = new Loader();
  const trap = new Container();
  const ticker = new Ticker();
  const textures: Texture[] = [];
  let player: Sprite | null = null;
  const hp = ref(100);
  const score = ref(0);
  let timer: NodeJS.Timer;

  trap.zIndex = 3;

  loader.add("trap", TrapImg).load((_, resources) => {
    TrapTexturePosition.forEach((position) => {
      const t = new Texture(
        resources.trap.texture as any,
        new Rectangle(...position)
      );
      textures.push(t);
    });
  });

  loader.load(() => {
    timer = setInterval(() => {
      const index = Math.floor(Math.random() * 2) + 1;
      const item = new Sprite(textures[index]);
      item.width = 80;
      item.height = 40;
      item.x = BODY_HEIGHT;
      item.y = BODY_WIDTH - 120;
      trap.addChild(item);
      let scoreFlag = true;
      let hpFlag = true;
      let isHit = false;

      function itemTicker() {
        item.x -= 8;

        if (player && !isHit) {
          isHit = hitTestRectangle(player, item);
          if (hpFlag && isHit) {
            hp.value -= 10;
            hpFlag = false;
            if (hp.value === 0) stopGame();
          } else if (scoreFlag && item.x < player.x) {
            score.value++;
            scoreFlag = false;
          }
        }

        if (item.x < -item.width) {
          ticker.remove(itemTicker);
          trap.removeChild(item);
        }
      }

      ticker.add(itemTicker);
    }, 2000);
  });

  function runHurdle(target: Sprite) {
    player = target;
    ticker.start();
  }

  function stopGame() {
    timer && clearInterval(timer);
    ticker.stop();
  }

  return { trap, runHurdle, score, hp };
}
