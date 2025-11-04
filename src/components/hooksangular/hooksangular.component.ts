import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector: "hooks-angular",
    standalone: false,
    templateUrl: "./hooksangular.component.html",
    styleUrls: [
        "./hooksangular.component.css"
    ]
})

export class HooksAngular implements OnInit {
    constructor() {
        console.log("Constructor: Primer método de inicio de Component");

    }

    ngOnInit(): void {
        console.log("ngOnInit: Segundo método de inicio de Component");
    }

    ngDoCheck(): void {
        console.log("ngDoCheck: Tercer método de inicio de Component");
    }
}
