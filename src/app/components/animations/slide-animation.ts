import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export const SlideAnimation: AnimationTriggerMetadata[] = [trigger('fadeAnimation', [
  state('*', style({opacity: 1})),
  transition('* => void', [
    animate(150, style({opacity: 0, display: 'none'}))
  ]),
  transition('void => *', [
    style({opacity: '0'}),
    animate(150, style({opacity: 1}))
  ])
]),
  trigger('expandAnimation', [
    transition('expand => void', [
      style({height: '*', overflow: 'hidden'}),
      animate(150, style({height: 0}))
    ]),
    transition('void => expand', [
      style({height: 0, overflow: 'hidden'}),
      animate(150, style({height: '*'}))
    ])
  ])];
