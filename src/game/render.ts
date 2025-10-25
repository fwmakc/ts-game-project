import { renderService } from './services/render.service';

// called before objects are rendered
// draw any background effects that appear behind objects

export function render() {
  renderService();
}
