import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { Persona } from '../domain/persona';
import { Libro } from '../domain/libro';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: any;

  constructor(private http: HttpClient) { }
  
  save(libro: Libro): Observable<any[]> {
    return this.http.post<any>("http://localhost:8080/prueba2023Buestan/rs/libro/crear", libro).
    pipe(
      catchError(error => {
        console.error('Error en la petición:', error);
        // Realiza alguna acción adecuada en caso de error, por ejemplo, mostrar un mensaje de error
        // Puedes lanzar un nuevo error con throwError si lo deseas
        // return throwError('Algo salió mal. Intente nuevamente más tarde.');
        return throwError(error);
      })
    );
  }
  edit(libro: Libro): Observable<any[]> {
    return this.http.post<any>("http://localhost:8080/prueba2023Buestan/rs/libro/modificar", libro).
    pipe(
      catchError(error => {
        console.error('Error en la petición:', error);
        // Realiza alguna acción adecuada en caso de error, por ejemplo, mostrar un mensaje de error
        // Puedes lanzar un nuevo error con throwError si lo deseas
        // return throwError('Algo salió mal. Intente nuevamente más tarde.');
        return throwError(error);
      })
    );
  }
 
  show(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/prueba2023Buestan/rs/libro/listar").
    pipe(
      catchError(error => {
        console.error('Error en la petición:', error);
        // Realiza alguna acción adecuada en caso de error, por ejemplo, mostrar un mensaje de error
        // Puedes lanzar un nuevo error con throwError si lo deseas
        // return throwError('Algo salió mal. Intente nuevamente más tarde.');
        return throwError(error);
      })
    );
  }
  remove(codigo: number): Observable<any[]> {
    return this.http.post<any>("http://localhost:8080/prueba2023Buestan/rs/libro/eliminar", codigo).
    pipe(
      catchError(error => {
        console.error('Error en la petición:', error);
        // Realiza alguna acción adecuada en caso de error, por ejemplo, mostrar un mensaje de error
        // Puedes lanzar un nuevo error con throwError si lo deseas
        // return throwError('Algo salió mal. Intente nuevamente más tarde.');
        return throwError(error);
      })
    );
  }
  search(ce: string): Observable<any> {
      
    const url='http://localhost:8080/demojpa/rs/clientes/buscarxcedula';
    
    let queryParams= new HttpParams().append("cedula",ce);

    return this.http.get<any>(url,{params:queryParams});
  }
}
