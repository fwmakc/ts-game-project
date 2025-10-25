import {
  rand,
  randInt,
  setCameraPos,
  setCameraScale,
  setCanvasFixedSize,
  // setFontDefault,
  vec2,
} from 'littlejsengine';
import { GameScene } from '../scenes/game.scene';
import { resetGame } from './reset.game';

export function initGame() {
  const { size } = GameScene;

  setCanvasFixedSize(vec2(1920, 1080)); // 1080p
  setCameraPos(size.scale(0.5)); // center camera
  setCameraScale(48);
  // setFontDefault('Bescii');

  // start a new game
  resetGame();

  const randomInt = {
    iterate: 0,
    total: 0,
    middle: 0,
    max: undefined,
    min: undefined,
  };

  const random = {
    iterate: 0,
    total: 0,
    middle: 0,
    max: undefined,
    min: undefined,
  };

  const rounded = {
    iterate: 0,
    total: 0,
    middle: 0,
    max: undefined,
    min: undefined,
  };

  for (let i = 0; i < 100; i++) {
    const rndInt = randInt(1, 7);
    saveTo(rndInt, randomInt);

    const rnd = rand(1, 6);
    saveTo(rnd, random);

    const round = Math.round(rnd);
    saveTo(round, rounded);
  }

  console.log('-- randomInt', randomInt);
  console.log('-- random', random);
  console.log('-- rounded', rounded);
}

function saveTo(value, object) {
  object.total += value;
  object.iterate += 1;

  if (object.min === undefined || value < object.min) {
    object.min = value;
  }

  if (object.max === undefined || value > object.max) {
    object.max = value;
  }

  object.middle = Math.round(object.total / object.iterate);
}
