import { engineObjectsDestroy, vec2 } from 'littlejsengine';
import { gameConst } from '../consts/game.const';
import { levelSize } from '../consts/level_size.const';
import { Brick, Paddle, Wall } from '../objects';

export function resetGame() {
  // reset game objects
  engineObjectsDestroy();
  gameConst.score = 0;
  gameConst.brickCount = 0;

  // spawn bricks
  const pos = vec2();
  for (pos.x = 4; pos.x <= levelSize.x - 4; pos.x += 2)
    for (pos.y = 12; pos.y <= levelSize.y - 2; pos.y += 1) new Brick(pos);

  // create walls
  new Wall(vec2(-0.5, levelSize.y / 2), vec2(1, 100)); // top
  new Wall(vec2(levelSize.x + 0.5, levelSize.y / 2), vec2(1, 100)); // left
  new Wall(vec2(levelSize.x / 2, levelSize.y + 0.5), vec2(100, 1)); // right

  // spawn player paddle
  gameConst.paddle = new Paddle(vec2(levelSize.x / 2 - 12, 1));

  // reset ball
  gameConst.ball = null;
}
