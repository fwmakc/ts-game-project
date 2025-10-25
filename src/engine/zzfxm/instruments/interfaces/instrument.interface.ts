import { ShapeType } from '../enums/shape_type.enum';

export interface IInstrument {
  volume: number | undefined; // >= 0, 0.1
  frequency: number | undefined; // +-, 1
  shape: keyof typeof ShapeType;
  attack: number | undefined; // 0...3, 0.01
  sustain: number | undefined; // 0...3, 0.01
  release: number | undefined; // 0...3, 0.01
  shapeCurve: number | undefined; // >= 0, 0.1
  slide: number | undefined; // +-, 0.1
  deltaSlide: number | undefined; // +-, 0.1
  pitchJump: number | undefined; // +-, 10
  pitchJumpTime: number | undefined; // +-, 0.01
  repeatTime: number | undefined; // +-, 0.01
  noise: number | undefined; // +-, 0.1
  modulation: number | undefined; // +-, 0.1
  bitCrush: number | undefined; // +-, 0.1
  delay: number | undefined; // >= 0, 0.01
  sustainVolume: number | undefined; // >= 0, 0.01
  decay: number | undefined; // 0...1, 0.01
  tremolo: number | undefined; // 0...1, 0.01
}
