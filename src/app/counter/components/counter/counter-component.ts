import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>Bienvenido a Angular</p>
    <h3>El contador es: {{ counter }}</h3>
    <button (click)="handleCounter(1)">+1</button> -
    <button (click)="handleCounterReset()">Reset</button> -
    <button (click)="handleCounter(-1)">-1</button>`,
})
export class CounterComponent {
  public counter = 10;

  handleCounter(value: number): void {
    this.counter += value;
  }

  handleCounterReset(): void {
    this.counter = 10;
  }

  constructor() {}
}
