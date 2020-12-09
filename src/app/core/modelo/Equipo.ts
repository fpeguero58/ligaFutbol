export class Equipo {
  private _posicion: number = 0;
  private _golesFavor: number = 0;
  private _golesContra: number = 0;
  private _puntos: number = 0;

  constructor(private _nombre: String) {}

  public get nombre(): String {
    return this._nombre;
  }

  public get posicion(): number {
    return this._posicion;
  }

  public get golesFavor(): number {
    return this._golesFavor;
  }

  public get golesContra(): number {
    return this._golesContra;
  }

  public get puntos(): number {
    return this._puntos;
  }

  public set nombre(value: String) {
    this._nombre = value;
  }

  public set posicion(value: number) {
    this._posicion = value;
  }

  public set golesFavor(value: number) {
    this._golesFavor = value;
  }

  public set golesContra(value: number) {
    this._golesContra = value;
  }

  public set puntos(value: number) {
    this._puntos = value;
  }
}
