import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from '../produtos';

@Component({
  selector: 'produtos-detail',
  templateUrl: './produtos-detail.component.html',
  styleUrls: ['./produtos-detail.component.css']
})
export class ProdutosDetailComponent implements OnInit {
  @Input() produtos?: Produtos;

  constructor() { }

  ngOnInit(): void {
  }

}
