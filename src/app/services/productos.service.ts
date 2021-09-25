import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, Productos } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  info: Producto[] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/data/productos.json').subscribe((resp: any) => {
      console.log(resp);
      this.info = resp.productos;
    })
  }
}
