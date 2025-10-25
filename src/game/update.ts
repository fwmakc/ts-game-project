import { updateService } from './services/update.service';

// called every frame at 60 frames per second
// handle input and update the game state

export function update() {
  updateService();
}
