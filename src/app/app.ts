import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { Main } from './component/main/main';
import { Aside } from "./component/aside/aside";
import { Carrito } from "./component/carrito/carrito";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Main, Aside, Carrito],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 }