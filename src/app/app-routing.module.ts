import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'conta', component: MinhaContaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
