import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ImagenesService} from "../inicio/imagenes.service";
import {VideoService} from "../inicio/video.service";

@Component({
  selector: 'app-lado-cuatro',
  templateUrl: './lado-cuatro.component.html',
  styleUrls: ['../lado.component.css', './lado-cuatro.component.css']
})
export class LadoCuatroComponent implements OnInit {

  expandedImage: boolean = false;
  expandedImageSrc: string = '';
  backButton = true;

  imageUrls: string[] = [];

  @ViewChild('videoPlayer') videoplayer: any;

  constructor(private router: Router,
              private imagenesService: ImagenesService,
              public videoService: VideoService) { }

  ngOnInit(): void {
    this.imageUrls = this.imagenesService.getAllImageUrls();
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
