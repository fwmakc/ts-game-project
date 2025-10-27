import { IScene } from './scene.interface';

export class StackScenes {
  stack: Array<IScene> = [];

  constructor() {}

  add(scene: IScene) {
    this.stack.unshift(scene);
    scene.init();
  }

  remove() {
    this.stack.shift();
  }

  removeByName(sceneName: string) {
    this.stack = this.stack.filter((scene: IScene) => scene.name !== sceneName);
  }

  update() {
    this.stack.forEach((scene: IScene) => {
      if (!scene.active) return;
      scene.update();
    });
  }

  updatePost() {
    this.stack.forEach((scene: IScene) => {
      if (!scene.active) return;
      scene.updatePost();
    });
  }

  render() {
    this.stack.forEach((scene: IScene) => {
      if (!scene.active) return;
      scene.render();
    });
  }

  renderPost() {
    this.stack.forEach((scene: IScene) => {
      if (!scene.active) return;
      scene.renderPost();
    });
  }
}
