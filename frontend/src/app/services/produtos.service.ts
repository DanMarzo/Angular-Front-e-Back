import { Iproduto } from './../Model/IProduto.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: String = "http://localhost:3000/produtos";

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Iproduto[]>{
    return this.http.get<Iproduto[]>(this.URL);
  }

}
