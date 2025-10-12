import {
  setCameraPos,
  setCameraScale,
  setCanvasFixedSize,
  vec2,
} from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';
import { resetGame } from './reset.game';

export function initGame() {
  setCanvasFixedSize(vec2(1920, 1080)); // 1080p
  setCameraPos(GameScene.size.scale(0.5)); // center camera
  setCameraScale(48);

  // start a new game
  resetGame();
}
