import { Scene } from './scene';

export class ScenesStack {
  stack: Array<Scene> = [];

  constructor() {}

  add(scene: Scene) {
    this.stack.unshift(scene);
    scene.init();
  }

  remove() {
    this.stack.shift();
  }

  removeByName(sceneName: string) {
    this.stack = this.stack.filter((scene: Scene) => scene.name !== sceneName);
  }

  update() {
    this.stack.forEach((scene: Scene) => {
      if (!scene.active) return;
      scene.update();
    });
  }

  updatePost() {
    this.stack.forEach((scene: Scene) => {
      if (!scene.active) return;
      scene.updatePost();
    });
  }

  render() {
    this.stack.forEach((scene: Scene) => {
      if (!scene.active) return;
      scene.render();
    });
  }

  renderPost() {
    this.stack.forEach((scene: Scene) => {
      if (!scene.active) return;
      scene.renderPost();
    });
  }
}
