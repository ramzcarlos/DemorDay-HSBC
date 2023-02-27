import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sismo } from './sismo';


@Injectable({
  providedIn: 'root'
})


export class SismoService {

   // url obtinene el listado de todos los empleados en el backend
 private baseURL ="http://localhost:8080/api/v1/sismos";
  
 constructor(private httpClient : HttpClient) { }



 //este medodo nos sirve para obtener los sismos
 obtenerListaDeSismos(): Observable<Sismo[]>{
   return this.httpClient.get<Sismo[]>(`${this.baseURL}`);
 }
//este metodo nos sirve para registrar un usuario
 registrarSismo(sismo: Sismo): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, sismo );
 }

//este metodo sirve para actualizar el usuario
actualizarSismo(id:number,sismo:Sismo) : Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, sismo);
}

//este metodo sirve para obtener o buscar un usuario
obtenerSismoPorId(id:number):Observable<Sismo>{
  return this.httpClient.get<Sismo>(`${this.baseURL}/${id}`);
}

eliminarSismo(id:number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
