import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/Model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

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
  }
}
