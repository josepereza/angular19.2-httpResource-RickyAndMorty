import { inject, Injectable, Signal } from '@angular/core';
import { Ricky, RickyResponse } from '../interfaces/ricky-response';
import { Observable } from 'rxjs';
import { HttpClient, httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickyService {

  constructor() { }

  private http = inject(HttpClient);

  getProducts(): Observable<RickyResponse> {
    return this.http.get<RickyResponse>(`https://api.escuelajs.co/api/v1/products`);
  }

  getProductsRs() {
    return httpResource<RickyResponse>(
      {
        url: `https://rickandmortyapi.com/api/character`,
        method: 'GET',
      },
     
    );
    
  }

  getProduct(id: string): Observable<RickyResponse> {
    return this.http.get<RickyResponse>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }

  getProductRs(id: Signal<string>) {
    return httpResource<Ricky | undefined>(() => ({
      url: `https://rickandmortyapi.com/api/character/${id()}`,
    }));
  }
}
