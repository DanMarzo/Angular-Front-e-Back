import { IProduto } from './../Model/IProduto.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = "http://localhost:3000/produtos";

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.URL);
  }

}
