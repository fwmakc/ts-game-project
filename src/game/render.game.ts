import { cameraPos, drawRect, hsl } from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';

export function renderGame() {
  const { size } = GameScene;

  // draw a the background
  drawRect(cameraPos, size.scale(2), hsl(0, 0, 0.5));
  drawRect(cameraPos, size, hsl(0, 0, 0.02));
}
