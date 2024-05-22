import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lado-uno',
  templateUrl: './lado-uno.component.html',
  styleUrls: ['./lado-uno.component.css']
})
export class LadoUnoComponent implements OnInit {

  expandedImage: boolean = false;
  expandedImageSrc: string = '';
  backButton = true;

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
}
