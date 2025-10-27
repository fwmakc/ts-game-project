import { game } from './engine/system';
import { sources } from './game/sources';
import { start } from './game/start';
import { MainScene } from './scenes/main.scene';

const mainScene = new MainScene('main', 38, 20);

game.scenes.add(mainScene);
game.setSize(38, 20);
game.setSources(sources);
game.start(start);
