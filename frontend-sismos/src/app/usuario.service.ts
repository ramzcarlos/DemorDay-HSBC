import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Credentials, Usuario } from './usuario';


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

login(creds: Credentials){
  return this.httpClient.post('http://localhost:8080/login', creds,{
    observe:'response'
  }).pipe(map((Response: HttpResponse<any>)=>{
    const body = Response.body;
    const headers = Response.headers;

    const bearerToken = headers.get('Authorization')!;
    const token = bearerToken.replace('bearer', '');
    localStorage.setItem('token', token);

    return body;
  }))
}

getToken(){
  return localStorage.getItem('token');
}

}
