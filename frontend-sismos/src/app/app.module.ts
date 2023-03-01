import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component'
import { FormsModule } from '@angular/forms';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { InfoSismosComponent } from './info-sismos/info-sismos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListaSismosComponent } from './lista-sismos/lista-sismos.component';
import { RegistrarSismosComponent } from './registrar-sismos/registrar-sismos.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './helpers/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent,
    InfoSismosComponent,
    NotFoundComponent,
    ListaSismosComponent,
    RegistrarSismosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
