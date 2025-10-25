import { Song } from './zzfxm/song';

export { Song };

/*

const song = new Song();

song.instruments.setPattern('pianoInstrument', 'piano');

const pianoTrack0 = [['c1'],,,,[d1,50],,,];
const pianoTrack1 = [['c1'],,,,[c2,25],[c2,50],[c2,75],];

song.tracks.set('pianoTrack0', pianoTrack0);
song.tracks.set('pianoTrack1', pianoTrack1);

const pianoChannel0 = {
    instrument: song.instruments.get('pianoInstrument'),
    balance: -100,
    track: song.tracks.get('pianoTrack0'),
};

const pianoChannel1 = {
    instrument: song.instruments.get('pianoInstrument'),
    balance: 100,
    track: song.tracks.get('pianoTrack1'),
};

song.channel.set('pianoChannel0', pianoChannel0);
song.channel.set('pianoChannel1', pianoChannel1);

song.sequenser.setPattern('pianoChannel');
song.sequenser.addToPattern('pianoChannel', song.channel.get('pianoChannel0'));
song.sequenser.addToPattern('pianoChannel', song.channel.get('pianoChannel1'));
song.sequenser.addToSequencer('pianoChannel');

*/

/*
[                                     // Song
  [                                     // Instruments
    [.9, 0, 143, , , .35, 3],             // Instrument 0
    [1, 0, 216, , , .45, 1, 4, , ,50],    // Instrument 1
    [.75, 0, 196, , .08, .18, 3]          // Instrument 2
  ],
  [                                     // Patterns
    [                                     // Pattern 0
      [                                     // Channel 0
        0,                                    // Using instrument 0
        -1,                                   // From the left speaker
        1,                                    // play C-1
        0, 0, 0,                              // rest (x3)
        3.5,                                  // play E-1 with 50% attenuation
        0, 0, 0                               // rest (x3)
      ],
      [                                     // Channel 1
        1,                                    // Using instrument 1
        1,                                    // From the right speaker
        2,                                    // play D-1
        2.25,                                 // play D-1 with 25% attenuation
        3.5,                                  // Play E-1 with 50% attenuation
        4.75,                                 // Play F-1 with 75% attenuation
        -1,                                   // Release the note
        0, 0, 0                               // rest (x3)
      ]
    ]
  ],
  [                                     // Sequence
    0,                                    // Play pattern 0
    0,                                    // ...and again
  ],
  120,                                  // 120 BPM
  {                                     // Metadata
    title: "My Song",                      // Name of the song
    author: "Keith Clark"                  // Name of the author/composer
  }
]
*/
