import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: ICharacter[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Gokú', power: 9500 },
    { name: 'Vegeta', power: 7800 },
  ];

  onNewCharacter(character: ICharacter): void {
    this.characters.push(character);
  }

  onDelete(id: number): void {
    this.characters.splice(id, 1);
  }
}
