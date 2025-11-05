import { Component, OnInit } from "@angular/core";

@Component({
    selector: "hooks-angular",
    standalone: false,
    templateUrl: "./hooksangular.component.html",
    styleUrls: [
        "./hooksangular.component.css"
    ]
})

export class HooksAngular implements OnInit {
    public mensaje: string;
    
    constructor() {
        console.log("Constructor: Primer método de inicio de Component");
        this.mensaje = "Hoy es miércoles";
    }

    cambiarMensaje(): void {
        this.mensaje = "Y mañana será jueves";
    }

    ngOnInit(): void {
        console.log("ngOnInit: Segundo método de inicio de Component");
    }

    ngDoCheck(): void {
        console.log("ngDoCheck: Tercer método de inicio de Component");
    }
}
