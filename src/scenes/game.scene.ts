import { vec2, Vector2 } from 'littlejsengine';
import { Ball } from '../actors/ball.actor';
import { Paddle } from '../actors/paddle.actor';

export interface IGameScene {
  ball?: Ball;
  paddle?: Paddle;
  size: Vector2;
  started: boolean;
}

export const GameScene: IGameScene = {
  ball: undefined,
  paddle: undefined,
  size: vec2(38, 20),
  started: false,
};
