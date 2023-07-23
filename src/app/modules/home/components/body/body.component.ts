import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/shared/consts/consts';
import {
  trigger,
  transition,
  state,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class BodyComponent {
  public ROUTING = ROUTING;

  public testimonials = [
    // {
    //   imgUrl: 'https://i.goopics.net/ghd675.jpg',
    //   authors: 'Anaïs & Jérémy',
    //   city: 'bretteville sur laize',
    //   region: 'Calvados, France',
    //   texts: [
    //     `Dylan nous a accompagnés de A à Z dans la préparation de la journée du mariage. Le jour J, il
    //     s'est
    //     montré très professionnel, sympathique et détendu afin de nous accompagner et de capter au mieux nos émotions
    //     naturelles. Il a aussi su gérer les imprévus avec brio en naviguant sur deux lieux différents au cours de la
    //     matinée.`,
    //     `Merci infiniment Dylan pour tout, les clichés sont absolument sublimes et reflètent vraiment notre
    //     personnalité, que tu as pu cerner à travers la préparation du mariage et grâce à un questionnaire que tu as
    //     élaboré.
    //     Nous avons grâce à toi de magnifiques souvenirs de notre belle journée. N'hésitez pas, il a un talent
    //     incroyable !`,
    //     `Foncez les yeux fermés. Merci, du fond du cœur !`,
    //   ],
    // },
    {
      img: {
        url: 'https://i.postimg.cc/pX76bT32/Mathilde-Sebastien-bisous-mairie-derval-enfant-couple.webp',
        width: 1244,
        height: 700,
        alt: 'Mathilde-Sebastien-bisous-mairie-derval-enfant-couple',
      },
      imgMobile: {
        url: 'https://i.postimg.cc/jjTnLHBZ/mobile-Mathilde-Sebastien-bisous-mairie-derval-enfant-couple.webp',
        width: 600,
        height: 338,
        alt: 'mobile-Mathilde-Sebastien-bisous-mairie-derval-enfant-couple',
      },
      authors: 'Mathilde & Sebastien',
      city: 'Derval',
      region: 'Loire-Atlantique, France',
      texts: [
        `Dylan nous a accompagnés de A à Z dans la préparation de la journée du mariage. Le jour J, il
        s'est
        montré très professionnel, sympathique et détendu afin de nous accompagner et de capter au mieux nos émotions
        naturelles. Il a aussi su gérer les imprévus avec brio en naviguant sur deux lieux différents au cours de la
        matinée.`,
        `Merci infiniment Dylan pour tout, les clichés sont absolument sublimes et reflètent vraiment notre
        personnalité, que tu as pu cerner à travers la préparation du mariage et grâce à un questionnaire que tu as
        élaboré.
        Nous avons grâce à toi de magnifiques souvenirs de notre belle journée. N'hésitez pas, il a un talent
        incroyable !`,
        `Foncez les yeux fermés. Merci, du fond du cœur !`,
      ],
    },
  ];
  counter: number = 0;

  constructor(private readonly router: Router) {}

  onNext() {
    if (this.counter != this.testimonials.length - 1) {
      this.counter++;
    } else {
      this.counter = 0;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.counter = this.testimonials.length - 1;
    }
  }

  navigate(url: string): void {
    this.router.navigate([url]);
  }
}
