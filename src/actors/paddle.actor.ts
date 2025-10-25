import {
  clamp,
  gamepadStick,
  isUsingGamepad,
  keyIsDown,
  mousePos,
  vec2,
} from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';
import { PhysicsClass } from './classes/physics.class';
import { SettingsState } from '../states/settings.state';

export class Paddle extends PhysicsClass {
  constructor(pos: any) {
    super(pos, vec2(5, 0.5));
  }

  update() {
    // control with gamepad or mouse
    switch (SettingsState.controls) {
      case 'gamepad':
        if (isUsingGamepad) {
          this.pos.x += gamepadStick(0).x;
        }
        break;

      case 'keyboard':
        if (keyIsDown('ArrowLeft')) {
          this.pos.x -= 0.5;
        }
        if (keyIsDown('ArrowRight')) {
          this.pos.x += 0.5;
        }
        break;

      case 'mouse':
        this.pos.x = mousePos.x;
        break;

      default:
        break;
    }

    // keep paddle in bounds of level
    this.pos.x = clamp(
      this.pos.x,
      this.size.x / 2,
      GameScene.size.x - this.size.x / 2,
    );
  }
}
