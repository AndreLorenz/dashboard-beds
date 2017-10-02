import template from './card-template.html';
import './card.scss';

class CardComponent {

  constructor() {
    'ngInject';
    this.cards = [];
    this.initializer();

  }

  initializer() {
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(number => number % 2 ? this.cards.push({ number, title: `A0000${number}`, patientName: `João ${number}`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, ante non interdum efficitur, mi purus pharetra libero, sed volutpat tellus urna nec quam. Fusce fermentum vehicula consectetur. Sed eget faucibus elit. Aliquam erat volutpat. Aenean fringilla nisl sem, a venenatis felis cursus consequat. Vestibulum vel nisi egestas, gravida diam quis, aliquet magna. `, footer: `Philips Clinical Informatics` }) :
    //   this.cards.push({ number, title: `A000${number}`, patientName: `João ${number}`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.  `, footer: `Philips Clinical Informatics` }));

    this.cards = [{
      "bedInfo": {
        "statusColor": "#33333",
        "description": "A 00001",
        "bedStatus": [{
            "type": "accessibility"
          },
          {
            "type": "male"
          },
          {
            "type": "waiting"
          }
        ]
      },
      "contentInfo": {
        "status": "PATIENT",
        "riskClassification": "CRITICAL",
        "patientName": "Randy Barldon",
        "encounterNumber": 92121,
        "physicianName": "Dr. Joel Munoz",
        "moreInfo": [{
            "label": "label",
            "description": "description"
          },
          {
            "label": "label2",
            "description": "description2"
          }
        ],
        "patientStatus": [{
            "type": "VIP"
          },
          {
            "type": "Male"
          },
          {
            "type": "Alergic",
            "moreInfo": "Cilic, Diabetic"
          }
        ]
      },
      "encounterInfo": [{
          "type": "BACTERIA_TEST"
        },
        {
          "type": "TEST"
        },
        {
          "type": "SUSPENDED_ITEM"
        },
        {
          "type": "ALLERGY"
        },
        {
          "type": "BIRTHDAY"
        },
        {
          "type": "DISCHARGE"
        }
      ]
    }]


  }

  drag(event) {
    console.log(event);
  }
}

export default {
  template: template,
  controller: CardComponent
};