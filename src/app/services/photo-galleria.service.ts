import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoGalleriaService {
  getData() {
    return [
      {
        itemImageSrc: '../../assets/images/obraQuatro/final.jpg',
        thumbnailImageSrc: '../../assets/images/obraQuatro/final.jpg',
        alt: 'Vale verde Palhoça',
        title: ' Vale verde Palhoça'
      },
      {
        itemImageSrc: '../../assets/images/obraCinco/final.jpg',
        thumbnailImageSrc: '../../assets/images/obraCinco/final.jpg',
        alt: 'Vale verde Palhoça',
        title: 'Vale verde Palhoça'
      },
      {
        itemImageSrc: '../../assets/images/obraSeis/final.jpg',
        thumbnailImageSrc: '../../assets/images/obraSeis/final.jpg',
        alt: 'Deltaville Biguaçu',
        title: 'Loteamento Jardins Palhoça'
      },
      {
        itemImageSrc: '../../assets/images/obraUm/final.jpg',
        thumbnailImageSrc: '../../assets/images/obraUm/final.jpg',
        alt: 'Loteamento Jardins Palhoça',
        title: 'Loteamento Jardins Palhoça'
      },
      {
        itemImageSrc: '../../assets/images/obraDois/final.jpg',
        thumbnailImageSrc: '../../assets/images/obraDois/final.jpg',
        alt: 'Loteamento Jardins Palhoça',
        title: 'Loteamento Jardins Palhoça'
      },
      {
        itemImageSrc: '../../assets/images/obraNove/final.jpg',
        thumbnailImageSrc: '../../assets/images/obraNove/final.jpg',
        alt: 'Lisboa Palhoça',
        title: 'Lisboa Palhoça'
      },
      {
        itemImageSrc: '../../assets/images/obraOito/final.jpg',
        thumbnailImageSrc: '../../assets/images/obraOito/final.jpg',
        alt: 'Pedra Branca Palhoça',
        title: 'Pedra Branca Palhoça'
      },
      {
        itemImageSrc: '../../assets/images/obraSete/final.jpg',
        thumbnailImageSrc: '../../assets/images/obraSete/final.jpg',
        alt: 'Bela Vista Palhoça',
        title: 'Bela Vista Palhoça'
      },
      {
        itemImageSrc: '../../assets/images/obraTres/sexta.jpg',
        thumbnailImageSrc: '../../assets/images/obraTres/sexta.jpg',
        alt: 'Loteamento Jardins Palhoça',
        title: 'Loteamento Jardins Palhoça'
      },
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
