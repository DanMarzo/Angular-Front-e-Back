import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaString: string[] = ['Primeiro', 'Segundo', 'Terceiro'];

 constructor () {
    for (let item of this.listaString) {
      console.log(item);
    }
  }

  ngOnInit(): void {
  }

}
