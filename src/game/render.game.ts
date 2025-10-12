import { cameraPos, drawRect, hsl } from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';

export function renderGame() {
  // draw a the background
  drawRect(cameraPos, GameScene.size.scale(2), hsl(0, 0, 0.5));
  drawRect(cameraPos, GameScene.size, hsl(0, 0, 0.02));
}
