import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 42;
  public showNameBtn: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(heroName: string): void {
    this.showNameBtn = false;
    this.name = heroName;
  }

  changeAge(heroAge: number): void {
    this.age = heroAge;
  }

  resetForm(): void {
    this.showNameBtn = true;
    this.name = 'iron Man';
    this.age = 42;
  }
}
