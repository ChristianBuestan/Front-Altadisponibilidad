import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/domain/libro';
import { Persona } from 'src/app/domain/persona';
import { ClientesService } from 'src/app/services/clientes.service';
import { CrearClientesComponent } from '../crear-clientes/crear-clientes.component';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent {
  title="Listar libros existentes"

  displayedColumns: string[] = ['autor', 'nombre','actions'];

  lstlibros=new Array()
  libros:any
  constructor(private router: Router,
    private libroService: ClientesService){
    
  }
  ngOnInit(): void{
    this.listar();

  }
  listar(){
    this.libroService.show().subscribe(data=>{
      console.log(data);
      this.lstlibros=data;
    })
  }
  goCrearlibros(){
    this.router.navigate(['clientes/crear'])
  }
  goListarFactura(){
    this.router.navigate(['facturas/listar'])
  }
  editarLibro(p: Libro){
    this.router.navigate(['clientes/crear', { libro: JSON.stringify(p) }]);

  }
  removePersona(p: number){
    this.libroService.remove(p).subscribe(data=>{
      console.log(data);
      this.listar();
    })
  }
}
