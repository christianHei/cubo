import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  baseRotateX = -30;
  baseRotateY = -30;
  intervalId: any;
  isMouseDown = false;
  startMousePosition: { x: number, y: number } | null = null;
  clickTimer: any;
  isLongPress = false;

  constructor(private router: Router) {} // Inyecta el Router

  ngOnInit() {
    this.startContinuousRotation();
  }

  startContinuousRotation() {
    this.intervalId = setInterval(() => {
      if (!this.isMouseDown && !this.isLongPress) {
        this.baseRotateY += 1;
      }
    }, 25);
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del navegador
    const cubeFace = event.target as HTMLElement;
    if (cubeFace.classList.contains('face')) {
      this.isMouseDown = true;
      this.startMousePosition = { x: event.clientX, y: event.clientY };
      this.clickTimer = setTimeout(() => {
        this.isLongPress = true;
        // Aquí puedes agregar la lógica para el clic sostenido si es necesario
      }, 500); // Establece el tiempo de espera para distinguir entre un clic y un clic sostenido
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    clearTimeout(this.clickTimer); // Limpia el temporizador
    if (!this.isLongPress && !this.hasMouseMoved() && this.isMouseDown) {
      // @ts-ignore
      const cubeFace = event.target as HTMLElement;
      if (cubeFace.classList.contains('face')) {
        // Si no es un clic sostenido, el mouse no se ha movido y se ha hecho clic,
        // realiza la redirección solo si se ha hecho clic en una cara del cubo
        const faceId = cubeFace.id; // Obtener el ID de la cara del cubo seleccionada
        if (faceId === 'lado1') {
          this.router.navigateByUrl('/lado-uno'); // Redirigir a la página de opciones con el ID de la cara del cubo como parte de la URL
        }
        else if (faceId === 'lado2') {
          this.router.navigateByUrl('/lado-dos'); // Redirigir a la página de opciones con el ID de la cara del cubo como parte de la URL
        }
        else if (faceId === 'lado3') {
          this.router.navigateByUrl('/lado-tres'); // Redirigir a la página de opciones con el ID de la cara del cubo como parte de la URL
        }
        else if (faceId === 'lado4') {
          this.router.navigateByUrl('/lado-cuatro'); // Redirigir a la página de opciones con el ID de la cara del cubo como parte de la URL
        }
        else if (faceId === 'lado5') {
          this.router.navigateByUrl('/lado-cinco'); // Redirigir a la página de opciones con el ID de la cara del cubo como parte de la URL
        }
        else if (faceId === 'lado6') {
          this.router.navigateByUrl('/lado-seis'); // Redirigir a la página de opciones con el ID de la cara del cubo como parte de la URL
        }
      }
    }
    this.isLongPress = false; // Restablece la bandera de clic sostenido
    this.isMouseDown = false; // Restablece la bandera de clic presionado
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isMouseDown && this.startMousePosition) {
      const deltaX = event.clientX - this.startMousePosition.x;
      const deltaY = event.clientY - this.startMousePosition.y;
      this.baseRotateX -= deltaY * 0.01; // Ajusta estos valores según la sensibilidad deseada
      this.baseRotateY += deltaX * 0.01; // Cambia el signo para mover en la dirección correcta
    }
  }

  hasMouseMoved() {
    if (this.startMousePosition) {
      // @ts-ignore
      const deltaX = Math.abs(this.startMousePosition.x - event.clientX);
      // @ts-ignore
      const deltaY = Math.abs(this.startMousePosition.y - event.clientY);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      return distance > 5; // Define un umbral para considerar si el mouse se ha movido
    }
    return false;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  get totalRotateX() {
    return this.baseRotateX;
  }

  get totalRotateY() {
    return this.baseRotateY;
  }
}
