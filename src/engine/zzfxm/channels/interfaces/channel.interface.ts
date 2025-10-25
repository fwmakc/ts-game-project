import { TrackType } from '../../tracks';

export interface IChannel {
  instrument: number | undefined;
  balance: number | undefined; // -100...100
  track: TrackType | undefined;
}
