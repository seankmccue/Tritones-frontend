export enum VoicePart {
    SOPRANO = 'Soprano',
    MEZZO = 'Mezzo',
    ALTO = 'Alto',
    TENOR = 'Tenor',
    BARITONE = 'Baritone',
    BASS = 'Bass',
  }

export interface Member {
    name: string;
    number: string;
    voicePart: string | null;
    board: string | null;
    imageUrl: string | null;
    classLevel: string;
    funFacts: string;
    hometown: string;
    major: string;
  }

  