import { engineObjectsDestroy, vec2 } from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';
import { GameState } from '../states/game.state';
import { Brick, Paddle, Wall } from '../entities';

export function resetGame() {
  // reset game objects
  engineObjectsDestroy();
  GameState.score = 0;

  // spawn bricks
  const pos = vec2();
  for (pos.x = 4; pos.x <= GameScene.size.x - 4; pos.x += 2)
    for (pos.y = 12; pos.y <= GameScene.size.y - 2; pos.y += 1) new Brick(pos);

  // create walls
  new Wall(vec2(-0.5, GameScene.size.y / 2), vec2(1, 100)); // top
  new Wall(vec2(GameScene.size.x + 0.5, GameScene.size.y / 2), vec2(1, 100)); // left
  new Wall(vec2(GameScene.size.x / 2, GameScene.size.y + 0.5), vec2(100, 1)); // right

  // spawn player paddle
  GameScene.paddle = new Paddle(vec2(GameScene.size.x / 2 - 12, 1));

  // reset ball
  GameScene.ball = undefined;
}
