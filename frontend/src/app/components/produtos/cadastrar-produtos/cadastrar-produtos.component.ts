import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  nome: string = "";
  validade: string = '';
  preco: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  salvarProduto(): void{
    console.log('Nome: ', this.nome)
    console.log('Validade: ', this.validade)
    console.log('Preço: ', this.preco)
    alert('Salvo com sucesso!')
  }

}
