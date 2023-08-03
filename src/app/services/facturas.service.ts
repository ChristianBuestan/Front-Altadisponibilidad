import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../domain/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  facturas: any;

  constructor(private http: HttpClient) {}
    show(): Observable<any> {
      return this.http.get<any>("http://localhost:8080/demojpa/rs/factura")
    }
    delete(codigo: Factura): Observable<any> {
      return this.http.post<any>("http://localhost:8080/demojpa/rs/factura/borrar",codigo)
    }
    save(factura: Factura): Observable<any[]> {
      return this.http.post<any>("http://localhost:8080/demojpa/rs/factura/crear", factura)
    }
    update(factura: Factura): Observable<any[]> {
      return this.http.post<any>("http://localhost:8080/demojpa/rs/factura/update", factura)
    }
}
