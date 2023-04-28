import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList: ICharacter[] = [];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
