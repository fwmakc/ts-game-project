import { hsl } from 'littlejsengine';
import { PhysicsObject } from './physics.object';

export class Wall extends PhysicsObject {
  constructor(pos: any, size: any) {
    super(pos, size, 0, 0, hsl(0, 0, 0, 0));
  }
}
