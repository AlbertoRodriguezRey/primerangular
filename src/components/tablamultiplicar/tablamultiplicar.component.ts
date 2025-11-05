import { Component } from '@angular/core';

@Component({
    selector: 'app-tablamultiplicar',
    standalone: false,
    templateUrl: './tablamultiplicar.component.html',
    styleUrls: ['./tablamultiplicar.component.css']
})
export class TablamultiplicarComponent {
    public numero: number = 0;
    public tabla: Array<number> = [];

    constructor() {
        this.generarTabla();
    }

    generarTabla(): void {
        this.tabla = [];
        for (let i = 1; i <= 10; i++) {
            this.tabla.push(this.numero * i);
        }
    }
}