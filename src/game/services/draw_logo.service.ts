import {
  cameraPos,
  drawTextOverlay,
  drawTextScreen,
  mainCanvasSize,
} from 'littlejsengine';
import { colors, vectors } from '../../engine';
import { GameScene } from '../../scenes/game.scene';
// import { setSongService } from './set_song.service';
// import { setSfxService } from './set_sfx.service';

export function drawLogoService() {
  if (!GameScene.started) {
    drawTextScreen('LittleJS Engine Тест', mainCanvasSize.scale(0.5), 64);

    drawTextOverlay(
      'LittleJS Engine Тест',
      cameraPos.add(vectors.vector(0, -1.2)),
      0.5,
      new colors.IColor(255, 0, 0),
      0,
      undefined,
      'center',
      'Bescii',
    );

    if (GameScene.ball) {
      // const song = setSongService();
      // song?.play();
      // const sfx = setSfxService();
      // sfx?.play();
      GameScene.started = true;
    }
  }
}
