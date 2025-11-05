import { Component } from '@angular/core';

@Component({
    selector: 'app-deportesv2',
    templateUrl: './deportesv2.component.html',
    standalone: false,
    styleUrls: ['./deportesv2.component.css']
})
export class Deportesv2Component  {
    public sports: Array<string>;
    public numeros: Array<number>;
    constructor() {
        this.sports = ['Fútbol', 'Baloncesto', 'Tenis', 'Natación', 'Ciclismo'];
        this.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
}
