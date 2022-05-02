import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  constructor() {}
}
