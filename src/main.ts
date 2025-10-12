import { engineInit } from 'littlejsengine';
import {
  initGame,
  updateGame,
  updatePostGame,
  renderGame,
  renderPostGame,
} from './game';

engineInit(initGame, updateGame, updatePostGame, renderGame, renderPostGame, [
  'tiles.png',
]);
