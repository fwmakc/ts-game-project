import { sounds } from '../../engine';
import { GameScene } from '../../scenes/game.scene';
import { startService } from './start.service';
import { setSongService } from './set_song.service';
import { setSfxService } from './set_sfx.service';
import { isStartedService } from './is_started.service';

export function updateService() {
  /*
  // spawn ball
  if (isStartedService()) {
    startService();
  }

  sounds.onInit(() => {
    const sfx = setSfxService();
    sfx.play();
    // const song = setSongService();
    // song.play();
  });

  if (GameScene.ball && GameScene.ball.position.y < -1) {
    // destroy ball if it goes below the level
    GameScene.ball.destroy();
    GameScene.ball = undefined;

    // resetService();
    startService();
  }
  */
}
