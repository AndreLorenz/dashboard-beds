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
        "description": "A 000000000000000000000000000000000000000001",
        "bedStatus": [{
          "type": "accessibility"
        },
        {
          "type": "male"
        }
        ]
      },
      "contentInfo": {
        "status": "PATIENT",
        "riskClassification": this.getRiskColor("DANGER"),
        "patientName": "Randy Barldon",
        "encounterNumber": 92121,
        "physicianName": "Dr. Joel Munoz",
        "moreInfo": [{
          "label": "label",
          "description": "description",
          "display": true
        },
        {
          "label": "label2",
          "description": "description2",
          "display": false

        }, {
          "label": "label3",
          "description": "description3",
          "display": true
        }
        ],
        "patientStatus": [{
          "type": "VIP",
          "image": require("./../assets/male.svg")
        },
        {
          "type": "Male",
          "image": require("./../assets/male.svg")
        },
        {
          "type": "Alergic",
          "moreInfo": "Cilic, Diabetic",
          "image": require("./../assets/allergies-warning.svg")
        }
        ]
      },
      "encounterInfos": [{
        "type": "BACTERIA_TEST",
        "image": require("./../assets/patient-isolated-precaution.svg")
      },
      {
        "type": "TEST",
        "image": require("./../assets/patient-isolated-grey.svg")
      },
      {
        "type": "SUSPENDED_ITEM",
        "image": require("./../assets/prescription-clock.svg")
      },
      {
        "type": "ALLERGY",
        "image": require("./../assets/prescription-clock-yellow.svg")
      },
      {
        "type": "BIRTHDAY",
        "image": require("./../assets/cake.svg")
      }
      ]
    }, {
      "bedInfo": {
        "statusColor": "#33333",
        "description": "A 000000000000000000000000000000000000000001",
        "bedStatus": [{
          "type": "accessibility"
        },
        {
          "type": "male"
        }
        ]
      },
      "contentInfo": {
        "status": "PATIENT",
        "riskClassification": this.getRiskColor("DANGER"),
        "patientName": "Randy Barldon",
        "encounterNumber": 92121,
        "physicianName": "Dr. Joel Munoz",
        "moreInfo": [{
          "label": "label",
          "description": "description",
          "display": true
        },
        {
          "label": "label2",
          "description": "description2",
          "display": false

        }, {
          "label": "label3",
          "description": "description3",
          "display": true
        }
        ],
        "patientStatus": [{
          "type": "VIP",
          "image": require("./../assets/male.svg")
        },
        {
          "type": "Male",
          "image": require("./../assets/male.svg")
        },
        {
          "type": "Alergic",
          "moreInfo": "Cilic, Diabetic",
          "image": require("./../assets/allergies-warning.svg")
        }
        ]
      },
      "encounterInfos": [{
        "type": "BACTERIA_TEST",
        "image": require("./../assets/patient-isolated-precaution.svg")
      },
      {
        "type": "TEST",
        "image": require("./../assets/patient-isolated-grey.svg")
      },
      {
        "type": "SUSPENDED_ITEM",
        "image": require("./../assets/prescription-clock.svg")
      },
      {
        "type": "ALLERGY",
        "image": require("./../assets/prescription-clock-yellow.svg")
      },
      {
        "type": "BIRTHDAY",
        "image": require("./../assets/cake.svg")
      }
        ,
      {
        "type": "BIRTHDAY",
        "image": require("./../assets/cake.svg")
      }
      ]
    },
    {
      "bedInfo": {
        "statusColor": "#33333",
        "description": "A 00004",
        "bedStatus": []
      },
      "contentInfo": {
        "status": "PATIENT",
        "riskClassification": this.getRiskColor("SAFETY"),
        "patientName": "Rose Salazar",
        "encounterNumber": 50297,
        "physicianName": "Dra. Leila Meyer",
        "patientStatus": [{
          "type": "ALLERGY",
          "image": require("./../assets/allergies-warning.svg")
        },
        {
          "type": "FEMALE",
          "image": require("./../assets/female.svg")
        }
        ]
      }
    },
    {
      "bedInfo": {
        "statusColor": "#33333",
        "description": "A 00008",
        "bedStatus": [{
          "type": "accessibility"
        },
        {
          "type": "male"
        }
        ]
      },
      "contentInfo": {
        "status": "AVAILABLE",
        "title": "Available",
        "moreInfo": [{
          "label": "Reserved",
          "description": "05-12-2017",
          "display": true
        },
        {
          "label": "Encounter",
          "description": "2236549",
          "display": true

        }
        ]
      }
    }

    ];

    this.cards.forEach(card => {
      if (card.encounterInfos && card.encounterInfos.length > 5) {
        card.encounterInfos.limitTo = 4;
        card.encounterInfos.remainingInfos = card.encounterInfos.length - 4;
      }
    });

    this.onDrop = (event, source, destiny) => {
      this.cards.forEach(c => {
        if (c.contentInfo.encounterNumber == source.contentInfo.encounterNumber) {
          c.contentInfo = {}
        }
      });
      console.log(event);
      console.log(source.contentInfo.patientName);
      console.log(destiny.contentInfo.patientName);
      destiny.contentInfo = source.contentInfo;
      // source.contentInfo = tempContent;
      

    }
  }


  getRiskColor(color) {
    switch (color) {
      case "NOTICE":
        return "#008EE8"
      case "SAFETY":
        return "#3FB763"
      case "CAUTION":
        return "#FFDB1F"
      case "WARNING":
        return "#FF9514"
      case "DANGER":
        return "#FF5454"
      default:
        return false;
    }
  }

  drag(event) {
    console.log(event);
  }
}

export default {
  template: template,
  controller: CardComponent
};