import { getPaused, setPaused } from 'littlejsengine';
import { Game } from './system/game.class';
import { Scene } from './system/scene.template';
import { StackScenes } from './system/stack_scenes.class';
import * as state from './system/state';

const stackScenes = new StackScenes();
const game = new Game(stackScenes);

export { Scene, game, stackScenes, state, getPaused, setPaused };
