
import { CommonModule } from '@angular/common';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroListComponent } from './heroes/list/list.component';
import { NgModule } from '@angular/core';


@NgModule({
  exports: [
    HeroComponent,
    HeroListComponent
  ],
  declarations: [
    HeroComponent,
    HeroListComponent],
   imports: [CommonModule]
 
})
export class HeroesModule { }
