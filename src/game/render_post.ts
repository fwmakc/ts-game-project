import { drawLogoService } from './services/draw_logo.service';

// called after objects are rendered
// draw effects or hud that appear above all objects

export function renderPost() {
  drawLogoService();
}
