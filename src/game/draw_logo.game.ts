import {
  cameraPos,
  Color,
  drawTextOverlay,
  drawTextScreen,
  mainCanvasSize,
  vec2,
} from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';

export function drawLogoGame() {
  if (!GameScene.started) {
    drawTextScreen('LittleJS Engine Тест', mainCanvasSize.scale(0.5), 64);

    drawTextOverlay(
      'LittleJS Engine Тест',
      cameraPos.add(vec2(0, -1.2)),
      0.5,
      new Color(255, 0, 0),
      0,
      undefined,
      'center',
      'Bescii',
    );

    if (GameScene.ball) {
      GameScene.started = true;
    }
  }
}
