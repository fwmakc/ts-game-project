import { vectors } from '..';

export interface IScene {
  active: boolean;
  name: string;
  size: vectors.IVector;

  init(): void;
  update(): void;
  updatePost(): void;
  render(): void;
  renderPost(): void;
}
