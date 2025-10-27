import { GameScene } from '../../scenes/game.scene';
import { Ball } from '../../actors/ball.actor';
import { vectors } from '../../engine';

export function startService() {
  const { size } = GameScene;

  GameScene.ball = new Ball(vectors.vector(size.x / 2, size.y / 2));
}
