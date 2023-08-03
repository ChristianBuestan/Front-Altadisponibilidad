import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})      
export class ProductsService {

  facturas: any;

  constructor(private http: HttpClient) {}
    show(): Observable<any> {
      return this.http.get<any>("http://localhost:8080/demojpa/rs/producto/listar")
    }
    delete(codigo: Product): Observable<any> {
      return this.http.post<any>("http://localhost:8080/demojpa/rs/producto/borrar",codigo)
    }
    save(factura: Product): Observable<any[]> {
      return this.http.post<any>("http://localhost:8080/demojpa/rs/producto/crear", factura)
    }
    update(factura: Product): Observable<any[]> {
      return this.http.post<any>("http://localhost:8080/demojpa/rs/producto/update", factura)
    }
    search(codigo: number): Observable<any> {
      
      const url='http://localhost:8080/demojpa/rs/producto/buscarxcodigo';
      
      let queryParams= new HttpParams().append("codigo",codigo);

      return this.http.get<any>(url,{params:queryParams});
    }
}
