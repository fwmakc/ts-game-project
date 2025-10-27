import { vectors } from '..';

export abstract class Scene {
  active: boolean;
  name: string;
  size: vectors.IVector;

  constructor() {
    this.active = true;
    this.name = '';
    this.size = vectors.vector();
  }

  abstract init(): void;
  abstract update(): void;
  abstract updatePost(): void;
  abstract render(): void;
  abstract renderPost(): void;
}
