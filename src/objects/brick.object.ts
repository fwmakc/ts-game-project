import { hsl, ParticleEmitter, randColor, tile, vec2 } from 'littlejsengine';
import { breakSound } from '../sounds/break.sound';
import { PhysicsObject } from './physics.object';
import { Ball } from './ball.object';

export class Brick extends PhysicsObject {
  constructor(pos: any) {
    super(pos, vec2(2, 1), tile(1, vec2(32, 16)), 0, randColor());
  }

  collideWithObject(ball: Ball): boolean {
    // destroy brick when hit with ball
    this.destroy();
    breakSound.play(this.pos);

    // make explosion effect
    const color1 = this.color;
    const color2 = color1.lerp(hsl(), 0.5);
    new ParticleEmitter(
      this.pos,
      0, // pos, angle
      this.size,
      0.1,
      200,
      3.14, // emitSize, emitTime, emitRate, emitCone
      tile(0, 16), // tileIndex, tileSize
      color1,
      color2, // colorStartA, colorStartB
      color1.scale(1, 0),
      color2.scale(1, 0), // colorEndA, colorEndB
      0.3,
      0.8,
      0.3,
      0.05,
      0.05, // time, sizeStart, sizeEnd, speed, angleSpeed
      0.99,
      0.95,
      0.4,
      3.14, // damp, angleDamp, gravity, cone
      0.1,
      0.8,
      false,
      true, // fade, randomness, collide, additive
    );

    // set ball trail color
    if (ball.trailEffect) {
      ball.trailEffect.colorStartA = this.color;
      ball.trailEffect.colorStartB = this.color.lerp(hsl(), 0.5);
    }

    return true;
  }
}
