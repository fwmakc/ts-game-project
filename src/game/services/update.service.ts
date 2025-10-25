import { vec2 } from 'littlejsengine';
import { GameScene } from '../../scenes/game.scene';
import { Ball } from '../../entities/ball.entity';
import { startService } from './start.service';

export function updateService() {
  const { size } = GameScene;

  // spawn ball
  if (startService()) {
    GameScene.ball = new Ball(vec2(size.x / 2, size.y / 2));
  }

  if (GameScene.ball && GameScene.ball.pos.y < -1) {
    // destroy ball if it goes below the level
    GameScene.ball.destroy();
    GameScene.ball = undefined;
  }
}
