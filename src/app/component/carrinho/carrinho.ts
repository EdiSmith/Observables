import { Component, inject, OnInit } from '@angular/core';
import { carrinhoService } from '../../compras/carrinho';
@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.scss'
})
export class Carrinho {

  carrinhoService = inject(this.carrinhoService);

}
