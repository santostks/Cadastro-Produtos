import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUTOS } from './mock-produtos';
import { Produtos } from './produtos';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }
  getProdutos(): Observable<Produtos[]> {
    const produtos = of(PRODUTOS);

    return produtos;
  }
}
