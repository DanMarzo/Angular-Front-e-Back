import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public NomeProduto: string = 'Curso do Angular';//modo como criar variavel
  // nomeProduto: string  = 'Curso do Angular'; //Modo simplificado
  // anuncio: string      = `O  ${this.nomeProduto} em promoção!`;
  // idProduto: number    = 123;
  // precoProduto: number = 2.59;
  // promocao: boolean    = true;
  //Relacionado a interpolation
  nomeProduto: string  = `Curso de Angular`;
  anuncio: string      = `O ${this.nomeProduto} está em promoção`;
  idProduto:number     = 123;
  precoProduto: number = 2.59;
  //---Relacionado a properly
  promocao: boolean    = true;
  foto: string         = 'assets/img/crud.png';//é necessario o caminho em maos
  dataValidade: string   = "12/12/12";
  constructor() {



    //this.anuncio = 'O' + this.anuncio + 'está em promoção!';
    // console.log(`Nome do produto: ${this.nomeProduto}`);
    // console.log(`Anuncio: ${this.anuncio}`);
    // console.log(`Id do Produto ${this.idProduto}`);
    // console.log(`Preço produto: ${this.precoProduto}`);
    // console.log(`Promoção ${this.promocao}`);
    // var a = 5
    // var b = 10
    // console.log(b)
    // if(b<11)
    // {
    //   let a = 4
    //   var b = 1
    //   console.log(a + ' a dentro if')
    //   console.log(b + ' b dentro if')
    // }
    // console.log(a + ' a fora if')
    // console.log(b + ' b fora if')
    //var variavel1;
    //let variavel2;
    //const constante1: number = 10;
    //var idade = 19;
    //console.log(`Minha idade é ${idade} anos`);
    // let idadeLet = 80;
    // console.log(`A idade do Dan é ${idadeLet} anos :D`);
    // function ImprimiIdade(){
    //   let idade = 20;
    //   console.log(`Minha idade ${idade}`);
    // }
    // function ImprimiIdadeFor(){
    //   for (var idade = 30; idade <= 40; idade++) {
    //     console.log(`A idade dentro do FOR :D ${idade}`);
    //   }
    //   console.log(`A idade fora do FOR =) ${idade}`);
    // }
    // ImprimiIdade();
    // ImprimiIdadeFor();
  }

  ngOnInit(): void {
  }

}
