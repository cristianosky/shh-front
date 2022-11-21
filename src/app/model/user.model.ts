export interface ResponseLogin {
  token: string;
  usuario: string;
  nombre: string;
  id: number;
}

export interface User {
  id: number;
  nombre: string;
  usuario: string;
}

export interface ListadoUser {
  estado: number;
  id: number;
  nombre: string;
  password: string;
  usuario: string;
}

export interface listadoUserHack {
  correo: string;
  id: number;
  nombre: string;
  password: string;
  pertenece: number;
}
