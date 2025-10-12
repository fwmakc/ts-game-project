import {
  clamp,
  gamepadStick,
  isUsingGamepad,
  mousePos,
  vec2,
} from 'littlejsengine';
import { levelSize } from '../consts/level_size.const';
import { PhysicsObject } from './physics.object';

export class Paddle extends PhysicsObject {
  constructor(pos: any) {
    super(pos, vec2(5, 0.5));
  }

  update() {
    // control with gamepad or mouse
    this.pos.x = isUsingGamepad ? this.pos.x + gamepadStick(0).x : mousePos.x;

    // keep paddle in bounds of level
    this.pos.x = clamp(
      this.pos.x,
      this.size.x / 2,
      levelSize.x - this.size.x / 2,
    );
  }
}
