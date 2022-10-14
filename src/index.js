import Phaser from "phaser";
import PlayScene from "./scenes/PlayScene"

const WIDTH=800;
const HEIGHT=600;
const BIRD_POSITION = {x: WIDTH * 0.1, y: HEIGHT / 2 };
const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION
}
const config = {
  //WebGl Js Api for rendering 2d and 3d graphics
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
    default: 'arcade',//basic phsyics plugin manages physics simulation
    arcade: {
      debug: true
    }
  },
  scene: [new PlayScene(SHARED_CONFIG)]
}

new Phaser.Game(config)

//CP00922704220007
//AS201819008333625  -> 21-22 -> Renewal



