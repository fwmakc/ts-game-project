import { IChannel } from '../interfaces/channel.interface';
import { ChannelType } from '../types/channel.type';

export function getChannel(c: IChannel): ChannelType {
  const { instrument = 0, balance = 0, track = [] } = c || {};

  const b = Math.round(balance / 10) / 10;

  return [instrument, b, ...track];
}
