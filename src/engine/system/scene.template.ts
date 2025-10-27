import { vectors } from '..';
import { IScene } from './scene.interface';

export abstract class Scene implements IScene {
  active: boolean;
  name: string;
  size: vectors.IVector;

  constructor(name, x, y) {
    this.active = true;
    this.name = name;
    this.size = vectors.vector(x, y);
  }

  abstract init(): void;
  abstract update(): void;
  abstract updatePost(): void;
  abstract render(): void;
  abstract renderPost(): void;
}
