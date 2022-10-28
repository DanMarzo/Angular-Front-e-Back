import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaString: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumero: number[] = [15, 15.28, 100]

  objetoModelo = {
    nome: 'Fatima',
    idade: 18,
    altura:1.56,
    graduado: true
  };

  listaProduto: any[] = [
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2021-12-31', id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2, promocao: true},
    {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2021-12-31'}
  ];

 constructor () {
    for (let item of this.listaString) {
      console.log(item);
    }

    for (let item of this.listaNumero) {
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
  }

  ngOnInit(): void {
  }

}
