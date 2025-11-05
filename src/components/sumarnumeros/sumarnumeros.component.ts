import { Component, ViewChild, ElementRef } from "@angular/core";


@Component({
    selector: 'app-sumar-numeros',
    templateUrl: './sumarnumeros.component.html',
    standalone: false,
    styleUrls: ['./sumarnumeros.component.css']
})

export class SumarNumeros {
    @ViewChild("cajanumero1") cajaNumero1Ref!: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2Ref!: ElementRef;
    public resultado: number;
    constructor() {
        this.resultado = 0;
        //EN ANGULAR AUNQUE SEAN REFERENCIAS TODAS LAS VARIABLES DEBEN SER INSTANICADAS
        // this.cajaNumero1Ref = new ElementRef(0);
        // this.cajaNumero2Ref = new ElementRef(0);
    }

    sumarNumeros(): void {
        let num1 = this.cajaNumero1Ref.nativeElement.value;
        let num2 = this.cajaNumero2Ref.nativeElement.value;
        this.resultado = parseInt(num1) + parseInt(num2);
    }

}