import * as Phaser from 'phaser';
import Scenes from './scenes';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Mandic Game',

  type: Phaser.AUTO,

  scale: {
    width: 800,
    height: 600,
  },

  scene: Scenes,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  parent: 'game',
  backgroundColor: '#000000',

  fps: { min: 60, panicMax: 120 },

};

export class Game extends Phaser.Game {

  constructor() {

    super(gameConfig);
  }

}

const game = new Game();

// export const game = new Phaser.Game(gameConfig);

// window.addEventListener('resize', () => {
//   game.scale.refresh();
// });
