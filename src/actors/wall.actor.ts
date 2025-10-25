import { hsl, Vector2 } from 'littlejsengine';
import { PhysicsClass } from './classes/physics.class';

export class Wall extends PhysicsClass {
  constructor(pos: Vector2, size: Vector2) {
    super(pos, size, undefined, 0, hsl(0, 0, 0, 0));
  }
}
