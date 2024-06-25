import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './list/list.component';



@NgModule({
  declarations: [HeroComponent,
    HeroListComponent],
  imports: [
    HeroComponent,
    HeroListComponent
  ]
})
export class HeroesModule { }
