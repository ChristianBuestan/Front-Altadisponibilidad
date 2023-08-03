import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClientesComponent } from './clientes/crear-clientes/crear-clientes.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
//creo mis vinculos, paginas, sigo los paths pegandolos y vere como se muestra lo de mi
//componente html.
const routes: Routes = [
  {path: "", component: ListarClientesComponent},
  {path: "clientes/listar", component: ListarClientesComponent},
  {path: "clientes/crear", component: CrearClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
