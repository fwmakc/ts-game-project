import { vec2, Vector2 } from 'littlejsengine';
import { Ball, Paddle } from '../entities';

export interface IGameScene {
  size: Vector2;
  paddle?: Paddle;
  ball?: Ball;
}

export const GameScene: IGameScene = {
  size: vec2(38, 20),
  paddle: undefined,
  ball: undefined,
};
