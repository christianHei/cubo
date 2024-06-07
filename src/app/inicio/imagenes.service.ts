import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  private images: { [key: string]: HTMLImageElement } = {};

  private imageUrls: string[] = [
    'https://krugercorp.com/cubo/lado1/1.jpg',
    'https://krugercorp.com/cubo/lado1/2.jpg',
    'https://krugercorp.com/cubo/lado1/3.jpg',
    'https://krugercorp.com/cubo/lado1/4.jpg',
    'https://krugercorp.com/cubo/lado1/5.jpg',
    'https://krugercorp.com/cubo/lado1/6.jpg',
    'https://krugercorp.com/cubo/lado2/1.jpg',
    'https://krugercorp.com/cubo/lado2/2.jpg',
    'https://krugercorp.com/cubo/lado2/3.jpg',
    'https://krugercorp.com/cubo/lado2/4.jpg',
    'https://krugercorp.com/cubo/lado2/5.jpg',
    'https://krugercorp.com/cubo/lado2/6.jpg',
    'https://krugercorp.com/cubo/lado3/1.jpg',
    'https://krugercorp.com/cubo/lado3/2.jpg',
    'https://krugercorp.com/cubo/lado3/3.jpg',
    'https://krugercorp.com/cubo/lado3/4.jpg',
    'https://krugercorp.com/cubo/lado4/1.jpg',
    'https://krugercorp.com/cubo/lado4/2.jpg',
    'https://krugercorp.com/cubo/lado4/3.jpg',
    'https://krugercorp.com/cubo/lado4/4.jpg',
    'https://krugercorp.com/cubo/lado5/1.jpg',
    'https://krugercorp.com/cubo/lado5/2.jpg',
    'https://krugercorp.com/cubo/lado5/3.jpg',
    'https://krugercorp.com/cubo/lado5/4.jpg',
    'https://krugercorp.com/cubo/lado6/1.jpg',
    'https://krugercorp.com/cubo/lado6/2.jpg',
    'https://krugercorp.com/cubo/lado6/3.jpg',
    'https://krugercorp.com/cubo/lado6/4.jpg'
  ];

  constructor() {
    this.preloadImages();
  }

  private preloadImages(): void {
    for (const url of this.imageUrls) {
      const img = new Image();
      img.src = url;
      this.images[url] = img;
    }
  }

  getImage(url: string): HTMLImageElement | undefined {
    return this.images[url];
  }

  getAllImageUrls(): string[] {
    return this.imageUrls;
  }
}
