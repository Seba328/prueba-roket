import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-photoview',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './photoview.component.html',
  styleUrl: './photoview.component.css'
})
export class PhotoviewComponent   {

  currentImageIndex = 0;
  private _images!: string[];

  // Se obtiene la lista de imagenes y el indice de la imagen actual
  @Input()
  set images(images: string[]) {
    this._images = images;
    this.currentImageIndex = 0;
  }
  
  // Se obtiene la lista de imagenes
  get images(): string[] {
    return this._images;
  }
  // Se avanza la imagen
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  // Se retrocede la imagen
  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
