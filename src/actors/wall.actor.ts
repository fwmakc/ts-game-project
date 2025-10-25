import { actors, colors, vectors } from '../engine';

export class Wall extends actors.Actor {
  constructor(position: vectors.IVector, size: vectors.IVector) {
    super({
      position,
      size,
      tiles: undefined,
      angle: 0,
      color: colors.hsl(0, 0, 0, 0),
    });
  }
}
