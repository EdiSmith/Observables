import { Injectable } from '@angular/core';
import { Compra } from './compras.model';

@Injectable({
  providedIn: 'root'
})
export class carrinhoService {

  private carrinho:  Compra[]=[];

  get carrinhoQtd(){
    return

  }

  // constructor() { }teste

  adicionarProduto(produto: string){
    this.carrinho.push({
      produto:produto,
      id:this.carrinho.length + 1,

  })
  }
}
