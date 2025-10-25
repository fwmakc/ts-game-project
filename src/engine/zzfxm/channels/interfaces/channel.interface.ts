import { TrackType } from '../../tracks/types/track.type';

export interface IChannel {
  instrument: number | undefined;
  balance: number | undefined; // -100...100
  track: TrackType | undefined;
}
