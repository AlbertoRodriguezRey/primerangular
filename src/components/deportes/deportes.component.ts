import { Component } from '@angular/core';

@Component({
    selector: 'app-deportes',
    templateUrl: './deportes.component.html',
    standalone: false,
    styleUrls: ['./deportes.component.css']
})
export class DeportesComponent  {
    public sports: Array<string>;
    public numeros: Array<number>;
    constructor() {
        this.sports = ['Fútbol', 'Baloncesto', 'Tenis', 'Natación', 'Ciclismo'];
        this.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
}
