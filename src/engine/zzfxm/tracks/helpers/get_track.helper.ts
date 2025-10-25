import { NoteNameType } from '../enums/note_name_type.enum';
import { NotesType } from '../types/notes.type';
import { TrackType } from '../types/track.type';

export function getTrack(notes: NotesType): TrackType {
  return notes.map((note) => {
    const [name, attenuation = 0] = note || [];
    const number = Number(name ? NoteNameType[name] : 0) || 0;
    const att = (Number(attenuation) || 0) / 100;
    return number + att;
  });
}
