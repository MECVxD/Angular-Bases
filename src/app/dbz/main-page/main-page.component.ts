import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public nuevo: Personaje = {
    nombre: 'Truncks',
    poder: 14000,
  };

  public agregar(): void {
    console.log(this.nuevo);
  }
}
