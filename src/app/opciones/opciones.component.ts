import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      const faceId = params['id'];
      console.log('lado seleccionado: ', faceId)
      // Ahora tienes el ID de la cara del cubo que se ha seleccionado
    });
  }

  goBack() {
    this.router.navigateByUrl('/inicio'); // Redirigir a la pantalla de inicio
  }

}
