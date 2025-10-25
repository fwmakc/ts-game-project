import { vectors } from '../engine';
import { Ball } from '../actors/ball.actor';
import { Paddle } from '../actors/paddle.actor';

export interface IGameScene {
  ball?: Ball;
  paddle?: Paddle;
  size: vectors.IVector;
  started: boolean;
}

export const GameScene: IGameScene = {
  ball: undefined,
  paddle: undefined,
  size: vectors.vector(38, 20),
  started: false,
};
