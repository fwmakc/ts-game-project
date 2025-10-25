import { hsl, Vector2 } from 'littlejsengine';
import { PhysicsObject } from './physics.entity';

export class Wall extends PhysicsObject {
  constructor(pos: Vector2, size: Vector2) {
    super(pos, size, undefined, 0, hsl(0, 0, 0, 0));
  }
}
