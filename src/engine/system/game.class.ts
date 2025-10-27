import { engineInit } from 'littlejsengine';
import { StackScenes } from './stack_scenes.class';

export class Game {
  sources: Array<string> = [];
  scenes: StackScenes;

  constructor(stackScenes: StackScenes) {
    this.scenes = stackScenes;
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
