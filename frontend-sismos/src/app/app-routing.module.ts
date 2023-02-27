import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { InfoSismosComponent } from './info-sismos/info-sismos.component';
import { ListaSismosComponent } from './lista-sismos/lista-sismos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrarSismosComponent } from './registrar-sismos/registrar-sismos.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';


const routes: Routes = [
  {path : 'info-sismos', component:InfoSismosComponent},
  {path : 'usuarios', component:ListaUsuariosComponent},
  {path : '', redirectTo: 'info-sismos', pathMatch: 'full'},
  {path : 'registrar-usuario', component : RegistrarUsuarioComponent},
  {path : 'registrar-sismo', component : RegistrarSismosComponent},
  {path : 'actualizar-usuario/:id', component : ActualizarUsuarioComponent},
  {path : 'sismos', component:ListaSismosComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
