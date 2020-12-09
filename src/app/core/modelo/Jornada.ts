import { Equipo } from "./Equipo";
import { Partido } from "./Partido";

export class Jornada {
  numeroPartidos: number = 5;
  private _partidos: Partido[] = new Array[this.numeroPartidos]();

  constructor(
    private _equiposA: Equipo[],
    private _equiposB: Equipo[],
    private _numeroJornada: number
  ) {
    this.generarJornada();
  }

  private generarJornada() {
    for (let i = 0; i < this.numeroPartidos; i++) {
      this.partidos[i] = new Partido(
        this.equiposA[i],
        this.equiposB[i],
        this.numeroJornada
      );
    }
  }

  public getPartidos(): String[] {
    let arrayPartidos: String[] = new Array[this.numeroPartidos]();
    for (let i = 0; i < this.partidos.length; i++) {
      arrayPartidos[i] =
        this.partidos[i].equipos[0].nombre +
        " - " +
        this.partidos[i].equipos[1].nombre;
    }
    return arrayPartidos;
  }

  public getResulados(): String[] {
    let arrayResultados: String[] = new String[this.numeroPartidos]();
    for (let i = 0; i < this.partidos.length; i++) {
      arrayResultados[i] =
        this.partidos[i].resultado[0] + " - " + this.partidos[i].resultado[1];
    }
    return arrayResultados;
  }

  public get partidos(): Partido[] {
    return this._partidos;
  }

  public get equiposA(): Equipo[] {
    return this._equiposA;
  }

  public get equiposB(): Equipo[] {
    return this._equiposB;
  }

  public set partidos(value: Partido[]) {
    this._partidos = value;
  }

  public set equiposA(value: Equipo[]) {
    this._equiposA = value;
  }

  public set equiposB(value: Equipo[]) {
    this._equiposB = value;
  }

  public get numeroJornada(): number {
    return this._numeroJornada;
  }

  public set numeroJornada(value: number) {
    this._numeroJornada = value;
  }
}
