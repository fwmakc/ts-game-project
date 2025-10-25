import { Color, EngineObject, TileInfo, Vector2 } from 'littlejsengine';

export class PhysicsClass extends EngineObject {
  constructor(
    pos?: Vector2,
    size?: Vector2,
    tileInfo?: TileInfo,
    angle?: number,
    color?: Color,
  ) {
    super(pos, size, tileInfo, angle, color);

    // make object collide
    this.setCollision();

    // make object have static physics
    this.mass = 0;
  }
}
