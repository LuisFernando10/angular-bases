import { Component } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: ICharacter[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Gokú', power: 9500 },
    { name: 'Vegeta', power: 7800 },
  ];
}
