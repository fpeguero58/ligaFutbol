import { Equipo } from "./Equipo";

export class Partido {
  private _goles: Map<String, number> = new Map<String, number>();
  private _equipos: Equipo[] = [];
  private _resultado: number[] = [0, 0];

  constructor(
    private _equipoA: Equipo,
    private _equipoB: Equipo,
    private _numeroJornada: number
  ) {
    this.equipos[0] = _equipoA;
    this.equipos[1] = _equipoB;
    this.jugarPartido();
    this.sumarPuntos();
    this.sumarGoles();
  }
  private sumarGoles() {
    this.equipos[0].golesFavor += this.resultado[0];
    this.equipos[0].golesContra += this.resultado[1];
    this.equipos[1].golesFavor += this.resultado[1];
    this.equipos[1].golesContra += this.resultado[0];
  }
  private sumarPuntos() {
    const victoria = 3;
    const empate = 1;
    if (this.resultado[0] == this.resultado[1]) {
      this._equipos[0].puntos += empate;
      this._equipos[1].puntos += empate;
    }
    if (this.resultado[0] > this.resultado[1]) {
      this.equipos[0].puntos += victoria;
    }
    if (this.resultado[1] > this.resultado[0]) {
      this.equipos[1].puntos += victoria;
    }
  }

  private jugarPartido() {
    let numeroGolesPartido = Math.floor(Math.random() * (7 - 0) + 0);
    const minutosGoles = this.elegirMinutosGoles(numeroGolesPartido);
    for (let i = 0; i < minutosGoles.length; i++) {
      this.asignarGolesAEquipos(minutosGoles[i]);
    }
  }

  private asignarGolesAEquipos(minutoGol: number) {
    const equipoGol = Math.floor(Math.random() * (2 - 1) + 1);
    this._goles.set(this.equipos[equipoGol].nombre, minutoGol);
    this.resultado[equipoGol]++;
  }

  private elegirMinutosGoles(numeroGolesPartido: number): number[] {
    const duracionPartido = 90;
    let minutoEnJuego = 0;
    let minutosGoles: number[];
    while (numeroGolesPartido > 0) {
      minutoEnJuego =
        Math.random() * (duracionPartido - minutoEnJuego) + minutoEnJuego;
      minutosGoles.push(minutoEnJuego);
      numeroGolesPartido--;
    }
    return minutosGoles;
  }

  public get equipos(): Equipo[] {
    return this._equipos;
  }

  public set equipos(value: Equipo[]) {
    this._equipos = value;
  }

  public get goles(): Map<String, number> {
    return this._goles;
  }

  public set goles(value: Map<String, number>) {
    this._goles = value;
  }

  public set resultado(value: number[]) {
    this._resultado = value;
  }

  public get resultado(): number[] {
    return this._resultado;
  }
}
