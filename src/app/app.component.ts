import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public counter = 10;
  public nombre = 'Luis';
  public title: string = 'my-first-angular-project';

  handleCounter(value: number): void {
    this.counter += value;
  }

  handleCounterReset(): void {
    this.counter = 10;
  }
}
