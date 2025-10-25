import { EngineObject, engineObjectsDestroy as destroy } from 'littlejsengine';
import { IVector } from './vectors';
import { ITile } from './tiles';
import { IColor } from './colors';

export interface IActor {
  position: IVector;
  size: IVector;
  tiles?: ITile;
  angle?: number;
  color?: IColor;
  order?: number;
}

export class Actor extends EngineObject {
  position: IVector = this.pos;

  constructor(params: IActor) {
    const { position, size, tiles, angle, color, order } = params;
    super(position, size, tiles, angle, color, order);

    // make object collide
    this.setCollision();

    // make object have static physics
    this.mass = 0;
  }
}

export { destroy };
