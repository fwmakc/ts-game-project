import { vec2, Vector2 } from 'littlejsengine';
import { Ball } from '../entities/ball.entity';
import { Paddle } from '../entities/paddle.entity';

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
