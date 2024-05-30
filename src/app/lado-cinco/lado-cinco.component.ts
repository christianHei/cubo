import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lado-cinco',
  templateUrl: './lado-cinco.component.html',
  styleUrls: ['../lado.component.css', './lado-cinco.component.css']
})
export class LadoCincoComponent implements OnInit {

  expandedImage: boolean = false;
  expandedImageSrc: string = '';
  backButton = true;

  @ViewChild('videoPlayer') videoplayer: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigateByUrl('/inicio'); // Redirigir a la pantalla de inicio
  }

  expandImage(event: any) {
    const img = event.target;
    const src = img.src;
    this.expandedImageSrc = src;
    this.expandedImage = true;
    this.backButton = false;
  }

  closeImage() {
    this.expandedImage = false; // Oculta la imagen expandida
    this.expandedImageSrc = ''; // Limpia la ruta de la imagen expandida
    this.backButton = true;
  }

  videoEnded(event: any) {
    this.videoplayer.nativeElement.controls = true; // Mostrar los controles del reproductor de video después de que termine la reproducción
    this.videoplayer.nativeElement.autoplay = false; // Desactivar la reproducción automática al finalizar el video
  }

}
