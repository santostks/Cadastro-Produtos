import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from './../produtos';


export class ProdutosComponent implements OnInit {
  selectedProdutos?: Produtos;
  produtos: Produtos[] = [];

  constructor(private produtosService :ProdutosService) { }

  ngOnInit(): void {
    this.getProdutos();
  }
  onSelect(produtos: Produtos): void {
    this.selectedProdutos = produtos;
  }

  getProdutos(): void {
    this.produtosService.getProdutos()
        .subscribe(produtos => this.produtos = produtos);
  }
}
