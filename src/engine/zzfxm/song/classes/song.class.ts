import { Channels } from '../../channels';
import { Instruments } from '../../instruments';
import { Sequencer } from '../../sequencer';
import { Tracks } from '../../tracks';
import { IMeta } from '../interfaces/meta.interface';

export class Song {
  instruments: Instruments;
  channels: Channels;
  sequencer: Sequencer;
  tracks: Tracks;

  bpm = 120;

  meta: IMeta = {};

  constructor() {
    this.instruments = new Instruments();
    this.channels = new Channels();
    this.sequencer = new Sequencer();
    this.tracks = new Tracks();
  }

  setBpm(bpm: number): void {
    this.bpm = bpm;
  }

  setMeta(key: string, value: string): void {
    this.meta[key] = value;
  }

  getSong() {
    const song: any = [];

    const instruments = this.instruments.instruments;
    song.push(instruments);

    const patterns = this.sequencer.patterns;
    song.push(patterns);

    const sequencer = this.sequencer.sequencer;
    song.push(sequencer);

    const bpm = this.bpm;
    song.push(bpm);

    const meta = this.meta;
    song.push(meta);

    return song;
  }
}
