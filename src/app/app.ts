import { Component, inject, model, OnInit} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Carrinho } from './component/carrinho/carrinho';
import { carrinhoService } from './compras/carrinho';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,Carrinho],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {


  inputProduto = "";
  private carrinhoService = inject(carrinhoService);

  protected title = "";

  private date$ = new Observable (sub =>{

    console.log("Obsevables funcionando");

    setTimeout(()=>{

      sub.next("Gostou?")


    }, 10000)

  })




  ngOnInit(): void {

    this.date$
    .subscribe(value => console.log(value));
    
  }

  adicionarProduto(){
    this.carrinhoService.adicionarProduto(this.inputProduto)
    this.inputProduto ="";
  }
}

