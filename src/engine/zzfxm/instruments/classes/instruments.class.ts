import {
  getInstrument,
  getPreset,
  IInstrument,
  InstrumentType,
} from '../../instruments';

export class Instruments {
  instruments: Array<InstrumentType> = [];

  instrumentsCollection: Array<string> = [];

  constructor() {}

  // get(name: string): InstrumentType | undefined {
  get(name: string): number | undefined {
    const index = this.instrumentsCollection.findIndex(
      (value) => value === name,
    );
    return index;
    // return this.instruments?.[index];
  }

  set(name: string, i: IInstrument | undefined): void {
    if (!i) {
      return;
    }

    const instrument = getInstrument(i);

    this.instruments.push(instrument);
    this.instrumentsCollection.push(name);
  }

  setPreset(name: string, preset: string): void {
    const instrument = getPreset(preset);

    this.instruments.push(instrument);
    this.instrumentsCollection.push(name);
  }
}
