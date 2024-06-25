import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";


@NgModule({
    declarations: [
        CounterComponent // aca indica que es un modulo de angular
    ],
    exports: [CounterComponent] // esto indica que se puede consumir desde otros modulos
})
export class CounterModule{

}