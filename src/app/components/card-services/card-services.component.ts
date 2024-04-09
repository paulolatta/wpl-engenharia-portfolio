import { Component, Input } from '@angular/core';

import { Card } from 'src/app/services/card';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.scss'
})
export class CardServicesComponent {
  @Input() card: Card = {
    src: '',
    title: '',
    description: ''
  };

  constructor() {}

  solicitar(tipo: string): void {
    window.open(
      `https://api.whatsapp.com/send?phone=5548991534886&text=Olá, gostaria de solicitar um ${tipo}`,
      '_blank'
    );
  }
}
