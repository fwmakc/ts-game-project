import {
  cameraPos,
  drawTextScreen,
  FontImage,
  mainCanvasSize,
  vec2,
} from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';

export function drawLogoGame() {
  if (!GameScene.started) {
    drawTextScreen('LittleJS Engine', mainCanvasSize.scale(0.5), 80);

    const fontImage = new Image();
    fontImage.src = 'engineFont.png';

    const font = new FontImage(fontImage);
    font.drawTextOverlay(
      'System Font Test',
      cameraPos.add(vec2(0, -1.25)),
      0.1,
      true,
    );

    if (GameScene.ball) {
      GameScene.started = true;
    }
  }
}
