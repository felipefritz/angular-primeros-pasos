import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid'


@Injectable({
    providedIn: 'root' // parametro que indica que sera un singleton con el nombre de la clase
})
export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: "Krillin",
        power: 500
    },
    {
        id: uuid(),
        name: "Goku",
        power: 1000
    },

    ]

    onNewCharacter(character: Character): void {
        const newCharacter: Character = {
            ...character // esparcir las demas propiedades de character que son name y power
        }
        this.characters.push(newCharacter) // agrega al finakl de array

    }

    deleteCharacterById(id:string): void {
        //this.characters.splice(id, 1)
        this.characters = this.characters.filter(character => character.id !== id)
    }    
}