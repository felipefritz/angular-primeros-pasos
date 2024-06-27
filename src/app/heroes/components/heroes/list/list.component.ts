import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class HeroListComponent {

  public heroNames2: string[] = ["spiderman", "ironman", "hulk", "thor", "pépe"]
  public deletedHero?: string
  // removeLastHero(): void{
  //    this.deletedHero =  this.heroNames2.pop();
  // }
}
