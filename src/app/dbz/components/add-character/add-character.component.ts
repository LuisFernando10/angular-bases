import { Component } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  public character: ICharacter = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);
  }
}
