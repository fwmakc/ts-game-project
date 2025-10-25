import { engineObjectsDestroy, vec2 } from 'littlejsengine';
import { Brick } from '../../entities/brick.entity';
import { Paddle } from '../../entities/paddle.entity';
import { Wall } from '../../entities/wall.entity';
import { GameScene } from '../../scenes/game.scene';
import { GameState } from '../../states/game.state';

export function resetService() {
  // reset game objects
  engineObjectsDestroy();
  GameState.score = 0;

  const { size } = GameScene;

  // spawn bricks
  const pos = vec2();
  for (pos.x = 4; pos.x <= size.x - 4; pos.x += 2) {
    for (pos.y = 12; pos.y <= size.y - 2; pos.y += 1) {
      new Brick(pos);
    }
  }

  // create walls
  new Wall(vec2(-0.5, size.y / 2), vec2(1, 100)); // top
  new Wall(vec2(size.x + 0.5, size.y / 2), vec2(1, 100)); // left
  new Wall(vec2(size.x / 2, size.y + 0.5), vec2(100, 1)); // right

  // spawn player paddle
  GameScene.paddle = new Paddle(vec2(size.x / 2 - 12, 1));

  // reset ball
  GameScene.ball = undefined;
}
