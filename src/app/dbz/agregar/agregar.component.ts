import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() public nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  @Output() public onNuevoPersonaje: EventEmitter<Personaje> =
    new EventEmitter();

  public agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
