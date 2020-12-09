import { Equipo } from "./Equipo";
import { Jornada } from "./Jornada";
export class Liga {
  private _equiposA: Equipo[] = [
    new Equipo("Atletico Madrid"),
    new Equipo("Extremadura"),
    new Equipo("Barcelona"),
    new Equipo("Real Madrid"),
    new Equipo("Athletic Club"),
  ];
  private _equiposB: Equipo[] = [
    new Equipo("Real Sociedad"),
    new Equipo("Valencia"),
    new Equipo("Sevilla"),
    new Equipo("Real Betis"),
    new Equipo("Villarreal"),
  ];
  numeroVueltas = 2;
  numeroJornadas =
    this._equiposA.length + this._equiposB.length - this.numeroVueltas;
  private _jornadas: Jornada[] = new Array[this.numeroJornadas]();

  constructor() {
    this.simularLiga();
  }
  private simularLiga() {
    for (let i = 0; i < this.jornadas.length; i++) {
      this.jornadas[i] = new Jornada(this.equiposA, this.equiposB, i);
      this.cambiarOrdenEquipos();
    }
  }
  private cambiarOrdenEquipos() {
    let auxiliar = this.equiposA;
    let auxiliarDos = this.equiposB;
    this.equiposA[1] = this.equiposB[0];
    this.equiposB[this.equiposB.length - 1] = this.equiposA[
      this.equiposA.length - 1
    ];
    for (let i = 2; i < this.equiposA.length; i++) {
      this.equiposA[i] = auxiliar[i - 1];
    }
    for (let i = 0; i < this.equiposB.length - 1; i++) {
      this.equiposB[i] = auxiliarDos[i + 1];
    }
  }

  public getJornada(numeroJornada: number): Jornada {
    return this.jornadas[numeroJornada];
  }

  public get jornadas(): Jornada[] {
    return this._jornadas;
  }

  public get equiposA(): Equipo[] {
    return this._equiposA;
  }

  public get equiposB(): Equipo[] {
    return this._equiposB;
  }

  public set jornadas(value: Jornada[]) {
    this._jornadas = value;
  }

  public set equiposA(value: Equipo[]) {
    this._equiposA = value;
  }

  public set equiposB(value: Equipo[]) {
    this._equiposB = value;
  }
}
