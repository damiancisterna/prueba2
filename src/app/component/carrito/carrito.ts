import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  @Input() carrito: any[] = [];

  eliminarDelCarrito(item: any) {
    this.carrito = this.carrito.filter(p => p !== item);
}
}



