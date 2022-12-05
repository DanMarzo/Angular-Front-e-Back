import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/Model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  // nome: string = "";
  // validade: string = '';
  // preco: number = 0;
  //Ao usar Interface eu preciso passar parametros
  produto: IProduto = {
    nome        : '',
    validade    : new Date(),
    precoProduto: 0
  };

  constructor(private produtoService : ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void{
    this.produtoService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtoService.exibirMensagem('Sistema', `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,'toast-success');

      this.router.navigate(['/produtos']);
      
    });

    //console.log('Nome: ', this.nome)
    //console.log('Validade: ', this.validade)
    //console.log('Preço: ', this.preco)
    //alert('Salvo com sucesso!')
  }

}
