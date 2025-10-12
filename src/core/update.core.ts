import { updateGame } from '../game/update.game';

// called every frame at 60 frames per second
// handle input and update the game state

export function update() {
  updateGame();
}
