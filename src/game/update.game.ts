import { vec2 } from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';
import { Ball } from '../entities';
import { StartGame } from './helpers/start_game.helper';

export function updateGame() {
  // spawn ball
  if (StartGame()) {
    GameScene.ball = new Ball(vec2(GameScene.size.x / 2, GameScene.size.y / 2));
  }

  if (GameScene.ball && GameScene.ball.pos.y < -1) {
    // destroy ball if it goes below the level
    GameScene.ball.destroy();
    GameScene.ball = undefined;
  }
}
