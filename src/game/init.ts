import { initGameService } from './services/init_game.service';

// called once after the engine starts up
// setup the game

export function init() {
  initGameService();
}
