import { drawTextScreen, mainCanvasSize } from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';

// called after objects are rendered
// draw effects or hud that appear above all objects

export function drawLogoGame() {
  if (!GameScene.started) {
    drawTextScreen('LittleJS Engine', mainCanvasSize.scale(0.5), 80);

    if (GameScene.ball) {
      GameScene.started = true;
    }
  }
}
