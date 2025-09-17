import { Component } from '@angular/core';
import { Carrito } from "../carrito/carrito";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Carrito],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

  // 🔹 Lista de personajes (solo para mostrar descripción)
  personajes = [
    { nombre: 'Logo', image: '/logo.png', mostrar: false, descripcion: 'El asombroso circo digital' },
    { nombre: 'Pomni', image: '/Pomni.jpg', mostrar: false, descripcion: 'Hola soy Pomni...' },
    { nombre: 'Jack', image: '/Jack.jpg', mostrar: false, descripcion: 'Asi como era bueno soy Jack...' },
    { nombre: 'Kinger', image: '/Kinger.jpg', mostrar: false, descripcion: 'Hola soy Kinger...' },
    { nombre: 'Zooble', image: '/2DZooble.webp', mostrar: false, descripcion: 'Hola soy Zooble...' },
    { nombre: 'Gangle', image: '/Gangle.jpg', mostrar: false, descripcion: 'Hola soy Gangle...' },
    { nombre: 'Ragatha', image: '/Ragatha.jpg', mostrar: false, descripcion: 'Hola soy Ragatha...' },
    { nombre: 'Caine', image: '/caine.jpg', mostrar: false, descripcion: 'Caine es la inteligencia artificial...' }
  ];

  // 🔹 Lista de productos en venta
  productos = [
    { nombre: 'Peluches Pomni', image: '/pro7.webp', precio: 14990, mostrar: false },
    { nombre: 'Peluches Jack', image: '/pro2.webp', precio: 14990, mostrar: false },
    { nombre: 'Peluches Gangle', image: '/pro3.webp', precio: 14990, mostrar: false },
    { nombre: 'Peluches Caine', image: '/pro4.jpg', precio: 14990, mostrar: false },
    { nombre: 'Peluches Zooble', image: '/pro5.jpg', precio: 14990, mostrar: false },
    { nombre: 'Peluches Ragatha', image: '/pro6.webp', precio: 14990, mostrar: false },
    { nombre: 'Peluches Kinger', image: '/pro1.jpg', precio: 14990, mostrar: false },
    { nombre: 'Colección Completa', image: '/pro8.webp', precio: 90000, mostrar: false }
  ];

  carrito: any[] = [];

  toggleProducto(index: number) {
    this.personajes[index].mostrar = !this.personajes[index].mostrar;
  }

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    console.log('Producto agregado:', producto);
     alert(`${producto.nombre} fue agregado al carrito 🛒`)
  }
}

