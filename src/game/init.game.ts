import {
  setCameraPos,
  setCameraScale,
  setCanvasFixedSize,
  // setFontDefault,
  vec2,
} from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';
import { resetGame } from './reset.game';

export function initGame() {
  const { size } = GameScene;

  setCanvasFixedSize(vec2(1920, 1080)); // 1080p
  setCameraPos(size.scale(0.5)); // center camera
  setCameraScale(48);
  // setFontDefault('Bescii');

  // start a new game
  resetGame();
}
