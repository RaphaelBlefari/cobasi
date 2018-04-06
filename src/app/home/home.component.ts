import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../servicos/produto.service';
import { Pedido } from '../model/pedido-model';

@Component({
  selector: 'app-cobasi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private produtoServico: ProdutoService) { }

  ngOnInit() {

  }
}
