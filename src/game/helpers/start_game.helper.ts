import {
  gamepadWasPressed,
  keyWasPressed,
  mouseWasPressed,
} from 'littlejsengine';
import { GameScene } from '../../scenes/game.scene';
import { SettingsState } from '../../states/settings.state';

export function StartGame() {
  if (GameScene.ball) {
    return false;
  }

  if (SettingsState.controls === 'gamepad' && gamepadWasPressed(0)) {
    return true;
  }

  if (
    SettingsState.controls === 'keyboard' &&
    (keyWasPressed('Enter') || keyWasPressed('Space'))
  ) {
    return true;
  }

  if (SettingsState.controls === 'mouse' && mouseWasPressed(0)) {
    return true;
  }

  return false;
}
