import {animate, state, style, transition, trigger, AnimationTriggerMetadata} from '@angular/animations';


export const slideInOutAnimation: AnimationTriggerMetadata =
  // trigger(): Esto crea un disparador de animación con una lista de estados y transición
  trigger ('routeAnimation', [
/* state(): Esto declara un estado de animación dentro del disparador dado; estamos
    usando el * en nuestro código, y coincide con cualquier estado de animación */
    state ('*',
      // style(): Esto toma un par de clave/valor de pares de propiedad/valor de CSS
      style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.4s ease-out',
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
    ])
  ]);
