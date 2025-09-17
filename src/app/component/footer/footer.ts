import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  enviarFormulario(event: Event){
  event?.preventDefault();
  alert("Gracis por tu ideea para el proximo capitulo ")
}


}
