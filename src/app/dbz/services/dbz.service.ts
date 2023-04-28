import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: ICharacter[] = [
    { id: uuid(), name: 'Krillinxx', power: 1000 },
    { id: uuid(), name: 'Gokú', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7800 },
  ];

  addCharacter(character: ICharacter): void {
    this.characters.push({ id: uuid(), ...character });
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
