const hairdressers = [
  {
    id: '1',
    isUser: false,
    firstName: 'Bruce',
    lastName: 'Wayne',
    email: 'brucewayne@gmail.com',
    countryCode: '',
    phoneNumber: '01',
    price: 999,
    password: '123',
    passwordConfirmation: '123',
    review: [
      {
        score: 10,
        comment: 'He is the dark knight!'
      },
      {
        score: 10,
        comment: 'He is Batman'
      }
    ]
  },
  {
    id: '2',
    isUser: false,
    firstName: 'Jason',
    lastName: 'Todd',
    countryCode: '',
    phoneNumber: '598661701',
    email: 'jasontodd@gmail.com',
    price: 99,
    password: '123',
    passwordConfirmation: '123',
    review: [
      {
        score: 12,
        comment: 'Awesome barber! .. please do not kill me'
      },
      {
        score: 1,
        comment: 'He is dead'
      }
    ]
  },
  {
    id: '3',
    isUser: false,
    firstName: 'Clark',
    lastName: 'Kent',
    countryCode: '',
    phoneNumber: '598661702',
    email: 'clarkkent@gmail.com',
    price: 1,
    password: '123',
    passwordConfirmation: '123',
    review: [
      {
        score: 10,
        comment: 'He is super fast'
      }
    ]
  },
  {
    id: '4',
    isUser: false,
    firstName: 'Peter',
    lastName: 'Parkers',
    countryCode: '',
    phoneNumber: '598661709',
    email: 'peterparkers@gmail.com',
    price: 10,
    password: '123',
    passwordConfirmation: '123',
    review: [
      {
        score: 5,
        comment: 'Not good, not terrible'
      },
      {
        score: 8,
        comment: 'He is good'
      }
    ]
  },
  {
    id: '5',
    isUser: false,
    firstName: 'Vakhtang',
    lastName: 'Nodadze',
    phoneNumber: '598661708',
    countryCode: '',
    price: 50,
    password: '123',
    passwordConfirmation: '123',
    review: [
      {
        score: 7,
        comment: 'meh...'
      }
    ]
  },
  {
    id: '6',
    isUser: true,
    phoneNumber: '11',
    countryCode: '',
    price: 50,
    password: '11',
    passwordConfirmation: '11'
  }
];

export default hairdressers;