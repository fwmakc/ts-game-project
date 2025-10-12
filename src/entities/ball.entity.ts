import { hsl, max, min, ParticleEmitter, tile, vec2 } from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';
import { bounceSound } from '../sounds/bounce.sound';
import { startSound } from '../sounds/start.sound';
import { PhysicsObject } from './physics.entity';

export class Ball extends PhysicsObject {
  trailEffect;

  constructor(pos: any) {
    super(pos, vec2(0.5), tile(0));

    // make a bouncy ball
    this.velocity = vec2(0, -0.1);
    this.restitution = 1;
    this.mass = 1;

    // attach a trail effect
    const color = hsl(0, 0, 0.2);
    this.trailEffect = new ParticleEmitter(
      this.pos,
      0, // pos, angle
      this.size,
      0,
      80,
      3.14, // emitSize, emitTime, emitRate, emitCone
      tile(0, 16), // tileIndex, tileSize
      color,
      color, // colorStartA, colorStartB
      color.scale(0),
      color.scale(0), // colorEndA, colorEndB
      2,
      0.4,
      1,
      0.001,
      0.05, // time, sizeStart, sizeEnd, speed, angleSpeed
      0.99,
      0.95,
      0,
      3.14, // damp, angleDamp, gravity, cone
      0.1,
      0.5,
      false,
      true, // fade, randomness, collide, additive
    );
    this.addChild(this.trailEffect);
    startSound.play(this.pos);
  }

  collideWithObject(object: PhysicsObject) {
    // only need special handling when colliding with paddle
    if (object != GameScene.paddle) return true;

    // prevent colliding with paddle if moving upwards
    if (this.velocity.y > 0) return false;

    // put english on the ball when it collides with paddle
    this.velocity = this.velocity.rotate(0.2 * (object.pos.x - this.pos.x));
    this.velocity.y = max(-this.velocity.y, 0.2);

    // speed up
    const speed = min(1.04 * this.velocity.length(), 0.5);
    this.velocity = this.velocity.normalize(speed);
    bounceSound.play(this.pos, 1, speed * 2);

    // prevent default collision code
    return false;
  }
}
