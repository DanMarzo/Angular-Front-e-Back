import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public NomeProduto: string = 'Curso do Angular';//modo como criar variavel
  nomeProduto: string = 'Curso do Angular'; //Modo simplificado
  anuncio: string = `O nome do produto ${this.nomeProduto}`;


  constructor() { }

  ngOnInit(): void {
  }

}
