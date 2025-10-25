import { vectors } from '../../engine';
import { Ball } from '../../actors/ball.actor';
import { GameScene } from '../../scenes/game.scene';
import { startService } from './start.service';

export function updateService() {
  const { size } = GameScene;

  // spawn ball
  if (startService()) {
    GameScene.ball = new Ball(vectors.vector(size.x / 2, size.y / 2));
  }

  if (GameScene.ball && GameScene.ball.position.y < -1) {
    // destroy ball if it goes below the level
    GameScene.ball.destroy();
    GameScene.ball = undefined;
  }
}
