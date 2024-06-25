import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h3>Counter {{counter}}</h3>

    <button (click)="increaceBy(1)"> +1</button>
    <button (click)="increaceBy(-1)"> -1</button>
    <button (click)="reset()"> reset</button>
    `
})

export class CounterComponent  {
    constructor() { 
       
    }
    public counter: number = 1;

  increaceBy(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 1
  }

}