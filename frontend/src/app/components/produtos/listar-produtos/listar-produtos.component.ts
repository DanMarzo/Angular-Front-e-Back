import { IProduto } from './../../../Model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
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

  listaProduto: IProduto[] = [];

 constructor (private produtosService: ProdutosService) {
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
    this.carregarProdutos();
  }
  carregarProdutos(): void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listaProduto = retorno;
    })
  }
  deletar(produto: IProduto):void{
    this.produtosService.excluir(produto.id!).subscribe(() => {
      this.produtosService.exibirMensagem('SISTEMA', `${produto.nome} foi excluido com sucesso!`, 'toast-success');
      this.carregarProdutos();
    });
  }
}
