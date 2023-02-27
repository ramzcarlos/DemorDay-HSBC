import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

 // url obtinene el listado de todos los empleados en el backend
 private baseURL ="http://localhost:8080/api/v1/usuarios";
  
 constructor(private httpClient : HttpClient) { }



 //este medodo nos sirve para obtener los usuarios
 obtenerListaDeUsuarios(): Observable<Usuario[]>{
   return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
 }
//este metodo nos sirve para registrar un usuario
 registrarUsuario(usuario: Usuario): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, usuario );
 }

//este metodo sirve para actualizar el usuario
actualizarUsuario(id:number,usuario:Usuario) : Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
}

//este metodo sirve para obtener o buscar un usuario
obtenerUsuarioPorId(id:number):Observable<Usuario>{
  return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
}

eliminarUsuario(id:number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
