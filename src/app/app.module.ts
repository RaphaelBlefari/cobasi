import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { UsuarioComponent } from './minha-conta/usuario/usuario.component';
import { PedidosComponent } from './minha-conta/pedidos/pedidos.component';
import { EnderecosComponent } from './minha-conta/enderecos/enderecos.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    MinhaContaComponent,
    UsuarioComponent,
    PedidosComponent,
    EnderecosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
