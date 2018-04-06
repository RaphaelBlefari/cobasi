import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Pedido } from '../model/pedido-model';

@Injectable()
export class ProdutoService {

  API_URL = 'http://localhost:3000/usuario/1/pedidos?_expand=produto';

  constructor(private http: HttpClient) { }

  retornaPedido(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.API_URL);
  }
}
