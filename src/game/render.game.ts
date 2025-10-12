import { cameraPos, drawRect, hsl } from 'littlejsengine';
import { levelSize } from '../consts/level_size.const';

export function renderGame() {
  // draw a the background
  drawRect(cameraPos, levelSize.scale(2), hsl(0, 0, 0.5));
  drawRect(cameraPos, levelSize, hsl(0, 0, 0.02));
}
