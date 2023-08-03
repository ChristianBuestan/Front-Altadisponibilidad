import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/domain/libro';
import { Persona } from 'src/app/domain/persona';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent {

  title= "Crear libros Christian Buestan , Carlos Pacheco"

  //variable persona
   libro:Libro=new Libro();
   caso:boolean=false;
   texto:string="";

  constructor(private router: Router,
    private libroService:ClientesService, private route: ActivatedRoute){
      const libroString = this.route.snapshot.paramMap.get('libro');
    if (libroString) {
      this.libro = JSON.parse(libroString);
      this.caso=true;
    }

    }


  //para animaciones
  ngOnInit(): void{
    

  }
  isInvalidInput(t:string){

    const pattern = /^[a-zA-Z\s]*$/;
    return !pattern.test(t);
  }
  seleccion(){
    if (this.caso==true) {
      this.editar()
      this.caso=false;
      
    }else if (this.caso==false) {
      this.guardar()
      this.caso=false;
    }
  }
  guardar(){
    console.log(this.libro)
    this.libroService.save(this.libro).subscribe(data=>{
      console.log(data);
    })
    this.libro=new Libro();
  }
  editar(){
    console.log(this.libro)
    this.libroService.edit(this.libro).subscribe(data=>{
      console.log(data);
    })
    this.libro=new Libro();
    
  }
  golistarlibros(){
    this.router.navigate(['clientes/listar'])
  }
  golistarFactura(){
    this.router.navigate(['facturas/listar'])
  }

  

}
