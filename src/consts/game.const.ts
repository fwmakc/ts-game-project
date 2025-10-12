import { Ball, Paddle } from '../objects';

export interface IGameConst {
  ball: Ball | null;
  paddle: Paddle | null;
  score: number;
  brickCount: number;
}

export const gameConst: IGameConst = {
  ball: null,
  score: 0,
  brickCount: 0,
  paddle: null,
};
