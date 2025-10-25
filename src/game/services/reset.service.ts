import { actors, vectors } from '../../engine';
import { Brick } from '../../actors/brick.actor';
import { Paddle } from '../../actors/paddle.actor';
import { Wall } from '../../actors/wall.actor';
import { GameScene } from '../../scenes/game.scene';
import { GameState } from '../../states/game.state';

export function resetService() {
  // reset game objects
  actors.destroy();
  GameState.score = 0;

  const { size } = GameScene;

  // spawn bricks
  const pos = vectors.vector();
  for (pos.x = 4; pos.x <= size.x - 4; pos.x += 2) {
    for (pos.y = 12; pos.y <= size.y - 2; pos.y += 1) {
      new Brick(pos);
    }
  }

  // create walls
  new Wall(vectors.vector(-0.5, size.y / 2), vectors.vector(1, 100)); // top
  new Wall(vectors.vector(size.x + 0.5, size.y / 2), vectors.vector(1, 100)); // left
  new Wall(vectors.vector(size.x / 2, size.y + 0.5), vectors.vector(100, 1)); // right

  // spawn player paddle
  GameScene.paddle = new Paddle(vectors.vector(size.x / 2 - 12, 1));

  // reset ball
  GameScene.ball = undefined;
}
