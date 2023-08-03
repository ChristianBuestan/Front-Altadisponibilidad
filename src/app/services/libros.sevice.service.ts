import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { Libro } from '../domain/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosSeviceService { 
  
  Libro: any;

  
  constructor(private http: HttpClient) { }

  
  save(libro: Libro): Observable<any> {
    return this.http.post<any>("http://localhost:8080/demojpa/rs/clientes/crear", cliente)
  }
  show(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/prueba2023Buestan/rs/libro/listar")
  }
}
