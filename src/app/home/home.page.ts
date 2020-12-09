import { Jornada } from "./../core/modelo/Jornada";
import { Component } from "@angular/core";
import { Liga } from "../core/modelo/Liga";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  jornadaActiva = 0;
  paginaActiva = "jornada";
  private liga: Liga;

  constructor() {}

  public irAJornadaAnterior() {
    if (this.jornadaActiva > 0) {
      this.jornadaActiva--;
    }
  }

  public irAJornadaSiguiente() {
    if (this.jornadaActiva < this.liga.numeroJornadas - 1) {
      this.jornadaActiva++;
    }
  }

  public getJornadas(): Jornada[] {
    return this.liga.jornadas;
  }
}
