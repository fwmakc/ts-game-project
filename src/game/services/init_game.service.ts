import {
  setCameraPos,
  setCameraScale,
  setCanvasFixedSize,
  // setFontDefault,
} from 'littlejsengine';
import { GameScene } from '../../scenes/game.scene';
import { resetService } from './reset.service';
import { vectors } from '../../engine';

export function initGameService() {
  const { size } = GameScene;

  setCanvasFixedSize(vectors.vector(1920, 1080)); // 1080p
  setCameraPos(size.scale(0.5)); // center camera
  setCameraScale(48);
  // setFontDefault('Bescii');

  // start a new game
  resetService();
}
