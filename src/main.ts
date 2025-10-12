import { engineInit } from 'littlejsengine';
import { initGame, updateGame, renderGame } from './game';

engineInit(
  initGame,
  updateGame,
  () => {},
  renderGame,
  () => {},
  ['tiles.png'],
);
