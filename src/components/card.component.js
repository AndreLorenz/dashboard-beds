import template from './card-template.html';
import './card.scss';

class CardComponent {

  constructor($rootScope) {
    'ngInject';
    this.cards = [];
    this.$rootScope = $rootScope;
    this.initializer();

  }

  initializer() {
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(number => number % 2 ? this.cards.push({ number, title: `A0000${number}`, patientName: `João ${number}`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, ante non interdum efficitur, mi purus pharetra libero, sed volutpat tellus urna nec quam. Fusce fermentum vehicula consectetur. Sed eget faucibus elit. Aliquam erat volutpat. Aenean fringilla nisl sem, a venenatis felis cursus consequat. Vestibulum vel nisi egestas, gravida diam quis, aliquet magna. `, footer: `Philips Clinical Informatics` }) :
    //   this.cards.push({ number, title: `A000${number}`, patientName: `João ${number}`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.  `, footer: `Philips Clinical Informatics` }));
    this.$rootScope.$on("ANGULAR_DRAG_START", (a, event, c, source) => {
      // event.currentTarget.style.backgroundColor = "#333000"
    });
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
          },
          {
            "type": "BIRTHDAY",
            "image": require("./../assets/cake.svg")
          }
        ]
      }, {
        "bedInfo": {
          "description": "A 00001",
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
          "patientName": "Randy Barldon",
          "riskClassification": this.getRiskColor("SAFETY"),
          "encounterNumber": 92122,
          "physicianName": "Dr. Joel Munoz",
          "moreInfo": [{
              "label": "Estimate discharge",
              "description": "25-04-2017",
              "display": true
            },
            {
              "label": "label2",
              "description": "description2",
              "display": false

            }, {
              "label": "label3",
              "description": "description3",
              "display": false
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
        "encounterInfos": []
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00004",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "PATIENT",
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
          "description": "A 00006",
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
      },
      {
        "bedInfo": {
          "description": "A 00008",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "AVAILABLE",
          "title": "Available"
        }
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00010",
          "bedStatus": [{
            "type": "male"
          }]
        },
        "contentInfo": {
          "status": "BLOCKED",
          "title": "Maintenance",
          "moreInfo": [{
              "label": "End estimated",
              "description": "05-12-2017",
              "display": true
            },
            {
              "label": "Reserved",
              "description": "15-09-2017",
              "display": true
            },
            {
              "label": "Encounter",
              "description": "56756",
              "display": true
            },

          ]
        }
      },
      {
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
          "encounterNumber": 92124,
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
          "description": "A 00001",
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
          "patientName": "Randy Barldon",
          "riskClassification": this.getRiskColor("SAFETY"),
          "encounterNumber": 92126,
          "physicianName": "Dr. Joel Munoz",
          "moreInfo": [{
              "label": "Estimate discharge",
              "description": "25-04-2017",
              "display": true
            },
            {
              "label": "label2",
              "description": "description2",
              "display": false

            }, {
              "label": "label3",
              "description": "description3",
              "display": false
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
        "encounterInfos": []
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00004",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "PATIENT",
          "patientName": "Rose Salazar",
          "encounterNumber": 50298,
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
          "description": "A 00006",
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
      },
      {
        "bedInfo": {
          "description": "A 00008",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "AVAILABLE",
          "title": "Available"
        }
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00010",
          "bedStatus": [{
            "type": "male"
          }]
        },
        "contentInfo": {
          "status": "BLOCKED",
          "title": "Maintenance",
          "moreInfo": [{
              "label": "End estimated",
              "description": "05-12-2017",
              "display": true
            },
            {
              "label": "Reserved",
              "description": "15-09-2017",
              "display": true
            },
            {
              "label": "Encounter",
              "description": "56756",
              "display": true
            },

          ]
        }
      },
      {
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
          "encounterNumber": 92131,
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
          "description": "A 00001",
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
          "patientName": "Randy Barldon",
          "riskClassification": this.getRiskColor("SAFETY"),
          "encounterNumber": 92141,
          "physicianName": "Dr. Joel Munoz",
          "moreInfo": [{
              "label": "Estimate discharge",
              "description": "25-04-2017",
              "display": true
            },
            {
              "label": "label2",
              "description": "description2",
              "display": false

            }, {
              "label": "label3",
              "description": "description3",
              "display": false
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
        "encounterInfos": []
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00004",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "PATIENT",
          "patientName": "Rose Salazar",
          "encounterNumber": 50227,
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
          "description": "A 00006",
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
      },
      {
        "bedInfo": {
          "description": "A 00008",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "AVAILABLE",
          "title": "Available"
        }
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00010",
          "bedStatus": [{
            "type": "male"
          }]
        },
        "contentInfo": {
          "status": "BLOCKED",
          "title": "Maintenance",
          "moreInfo": [{
              "label": "End estimated",
              "description": "05-12-2017",
              "display": true
            },
            {
              "label": "Reserved",
              "description": "15-09-2017",
              "display": true
            },
            {
              "label": "Encounter",
              "description": "56756",
              "display": true
            },

          ]
        }
      },
      {
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
          "encounterNumber": 92112,
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
          "description": "A 00001",
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
          "patientName": "Randy Barldon",
          "riskClassification": this.getRiskColor("SAFETY"),
          "encounterNumber": 92144,
          "physicianName": "Dr. Joel Munoz",
          "moreInfo": [{
              "label": "Estimate discharge",
              "description": "25-04-2017",
              "display": true
            },
            {
              "label": "label2",
              "description": "description2",
              "display": false

            }, {
              "label": "label3",
              "description": "description3",
              "display": false
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
        "encounterInfos": []
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00004",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "PATIENT",
          "patientName": "Rose Salazar",
          "encounterNumber": 510297,
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
          "description": "A 00006",
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
      },
      {
        "bedInfo": {
          "description": "A 00008",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "AVAILABLE",
          "title": "Available"
        }
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00010",
          "bedStatus": [{
            "type": "male"
          }]
        },
        "contentInfo": {
          "status": "BLOCKED",
          "title": "Maintenance",
          "moreInfo": [{
              "label": "End estimated",
              "description": "05-12-2017",
              "display": true
            },
            {
              "label": "Reserved",
              "description": "15-09-2017",
              "display": true
            },
            {
              "label": "Encounter",
              "description": "56756",
              "display": true
            },

          ]
        }
      },
      {
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
          "encounterNumber": 92142131,
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
          "description": "A 00001",
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
          "patientName": "Randy Barldon",
          "riskClassification": this.getRiskColor("SAFETY"),
          "encounterNumber": 9212341214,
          "physicianName": "Dr. Joel Munoz",
          "moreInfo": [{
              "label": "Estimate discharge",
              "description": "25-04-2017",
              "display": true
            },
            {
              "label": "label2",
              "description": "description2",
              "display": false

            }, {
              "label": "label3",
              "description": "description3",
              "display": false
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
        "encounterInfos": []
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00004",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "PATIENT",
          "patientName": "Rose Salazar",
          "encounterNumber": 44350297,
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
          "description": "A 00006",
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
      },
      {
        "bedInfo": {
          "description": "A 00008",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "AVAILABLE",
          "title": "Available"
        }
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00010",
          "bedStatus": [{
            "type": "male"
          }]
        },
        "contentInfo": {
          "status": "BLOCKED",
          "title": "Maintenance",
          "moreInfo": [{
              "label": "End estimated",
              "description": "05-12-2017",
              "display": true
            },
            {
              "label": "Reserved",
              "description": "15-09-2017",
              "display": true
            },
            {
              "label": "Encounter",
              "description": "56756",
              "display": true
            },

          ]
        }
      },
      {
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
          "encounterNumber": 55492121,
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
          "description": "A 00001",
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
          "patientName": "Randy Barldon",
          "riskClassification": this.getRiskColor("SAFETY"),
          "encounterNumber": 42392121,
          "physicianName": "Dr. Joel Munoz",
          "moreInfo": [{
              "label": "Estimate discharge",
              "description": "25-04-2017",
              "display": true
            },
            {
              "label": "label2",
              "description": "description2",
              "display": false

            }, {
              "label": "label3",
              "description": "description3",
              "display": false
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
        "encounterInfos": []
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00004",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "PATIENT",
          "patientName": "Rose Salazar",
          "encounterNumber": 5768650297,
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
          "description": "A 00006",
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
      },
      {
        "bedInfo": {
          "description": "A 00008",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "AVAILABLE",
          "title": "Available"
        }
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00010",
          "bedStatus": [{
            "type": "male"
          }]
        },
        "contentInfo": {
          "status": "BLOCKED",
          "title": "Maintenance",
          "moreInfo": [{
              "label": "End estimated",
              "description": "05-12-2017",
              "display": true
            },
            {
              "label": "Reserved",
              "description": "15-09-2017",
              "display": true
            },
            {
              "label": "Encounter",
              "description": "56756",
              "display": true
            },

          ]
        }
      },
      {
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
          "encounterNumber": 954352121,
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
          "description": "A 00001",
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
          "patientName": "Randy Barldon",
          "riskClassification": this.getRiskColor("SAFETY"),
          "encounterNumber": 235592121,
          "physicianName": "Dr. Joel Munoz",
          "moreInfo": [{
              "label": "Estimate discharge",
              "description": "25-04-2017",
              "display": true
            },
            {
              "label": "label2",
              "description": "description2",
              "display": false

            }, {
              "label": "label3",
              "description": "description3",
              "display": false
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
        "encounterInfos": []
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00004",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "PATIENT",
          "patientName": "Rose Salazar",
          "encounterNumber": 511120297,
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
          "description": "A 00006",
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
      },
      {
        "bedInfo": {
          "description": "A 00008",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "AVAILABLE",
          "title": "Available"
        }
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00010",
          "bedStatus": [{
            "type": "male"
          }]
        },
        "contentInfo": {
          "status": "BLOCKED",
          "title": "Maintenance",
          "moreInfo": [{
              "label": "End estimated",
              "description": "05-12-2017",
              "display": true
            },
            {
              "label": "Reserved",
              "description": "15-09-2017",
              "display": true
            },
            {
              "label": "Encounter",
              "description": "56756",
              "display": true
            },

          ]
        }
      },
      {
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
          "encounterNumber": 4321,
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
          "description": "A 00001",
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
          "patientName": "Randy Barldon",
          "riskClassification": this.getRiskColor("SAFETY"),
          "encounterNumber": 42121,
          "physicianName": "Dr. Joel Munoz",
          "moreInfo": [{
              "label": "Estimate discharge",
              "description": "25-04-2017",
              "display": true
            },
            {
              "label": "label2",
              "description": "description2",
              "display": false

            }, {
              "label": "label3",
              "description": "description3",
              "display": false
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
        "encounterInfos": []
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00004",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "PATIENT",
          "patientName": "Rose Salazar",
          "encounterNumber": 50423117,
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
          "description": "A 00006",
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
      },
      {
        "bedInfo": {
          "description": "A 00008",
          "bedStatus": []
        },
        "contentInfo": {
          "status": "AVAILABLE",
          "title": "Available"
        }
      },
      {
        "bedInfo": {
          "statusColor": "#33333",
          "description": "A 00010",
          "bedStatus": [{
            "type": "male"
          }]
        },
        "contentInfo": {
          "status": "BLOCKED",
          "title": "Maintenance",
          "moreInfo": [{
              "label": "End estimated",
              "description": "05-12-2017",
              "display": true
            },
            {
              "label": "Reserved",
              "description": "15-09-2017",
              "display": true
            },
            {
              "label": "Encounter",
              "description": "56756",
              "display": true
            },

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

  }


  onDrop(event, source, destiny) {
    this.cards.find(card => card.contentInfo.encounterNumber === source.contentInfo.encounterNumber).contentInfo = {
      "status": "AVAILABLE",
      "title": "Available"
    };
    destiny.contentInfo = source.contentInfo;
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

  dropValidate(card) {
    return card.contentInfo.status === "AVAILABLE";
  }
}

export default {
  template: template,
  controller: CardComponent
};