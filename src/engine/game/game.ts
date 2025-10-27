import { engineInit } from 'littlejsengine';
import { ScenesStack } from '../scenes/scenes_stack';

export class Game {
  sources: Array<string> = [];
  scenes: ScenesStack;

  constructor() {
    this.scenes = new ScenesStack();
  }

  start() {
    engineInit(
      this.init,
      this.update,
      this.updatePost,
      this.render,
      this.renderPost,
      this.sources,
    );
  }

  init() {}

  update() {
    this.scenes.update();
  }

  updatePost() {
    this.scenes.updatePost();
  }

  render() {
    this.scenes.render();
  }

  renderPost() {
    this.scenes.renderPost();
  }
}
