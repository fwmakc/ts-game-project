import { cameraPos, FontImage, vec2 } from 'littlejsengine';
import { gameConst } from '../consts/game.const';

export function renderPostGame() {
  // use built in image font for text
  const font = new FontImage();
  font.drawText(
    'Score: ' + gameConst.score,
    cameraPos.add(vec2(0, 9.7)),
    0.15,
    true,
  );
  if (!gameConst.brickCount)
    font.drawText('You Win!', cameraPos.add(vec2(0, -5)), 0.2, true);
  else if (!gameConst.ball)
    font.drawText('Click to Play', cameraPos.add(vec2(0, -5)), 0.2, true);
}
