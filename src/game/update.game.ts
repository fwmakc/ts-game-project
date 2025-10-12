import {
  gamepadWasPressed,
  keyWasPressed,
  mouseWasPressed,
  vec2,
} from 'littlejsengine';
import { gameConst } from '../consts/game.const';
import { levelSize } from '../consts/level_size.const';
import { Ball } from '../objects';
import { resetGame } from './reset.game';

export function updateGame() {
  // spawn ball
  if (!gameConst.ball && (mouseWasPressed(0) || gamepadWasPressed(0)))
    gameConst.ball = new Ball(vec2(levelSize.x / 2, levelSize.y / 2));

  if (gameConst.ball && gameConst.ball.pos.y < -1) {
    // destroy ball if it goes below the level
    gameConst.ball.destroy();
    gameConst.ball = null;
  }

  if (keyWasPressed('KeyR')) {
    resetGame();
  }
}
