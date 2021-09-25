export interface Productos {
  productos?: Producto[];
}

export interface Producto {
  id?: number;
  nombre?: string;
  tipo?: string;
  descripcion?: string;
  imagen?: string;
}