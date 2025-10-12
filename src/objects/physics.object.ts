import { EngineObject } from 'littlejsengine';

export class PhysicsObject extends EngineObject {
  constructor(pos?: any, size?: any, tileInfo?: any, angle?: any, color?: any) {
    super(pos, size, tileInfo, angle, color);

    // make object collide
    this.setCollision();

    // make object have static physics
    this.mass = 0;
  }
}
