import React from 'react';

export interface myCharacterType {
  myCharacter: { CharacterId: number | null };
  content: React.ReactNode;
}

export interface myInterestType {
  myInterest: { InterestId: number | null };
  category: string;
}

export interface myStateType {
  myState: { StateId: number | null };
  category: string;
}

export interface myRegionType {
  Region: { city: string };
  myRegion: { GuId: number };
}
