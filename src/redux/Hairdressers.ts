import { v4 } from 'uuid';

const hairdressers = [
  {
    id: v4(),
    firstName: 'Bruce',
    lastName: 'Wayne',
    email: 'brucewayne@gmail.com',
    countryCode: '',
    phoneNumber: '598661721',
    price: 999,
    password: '123',
    passwordConfirmation: '123'
  },
  {
    id: v4(),
    firstName: 'Jason',
    lastName: 'Todd',
    countryCode: '',
    phoneNumber: '598661701',
    email: 'jasontodd@gmail.com',
    price: 99,
    password: '123',
    passwordConfirmation: '123'
  },
  {
    id: v4(),
    firstName: 'Clark',
    lastName: 'Kent',
    countryCode: '',
    phoneNumber: '598661702',
    email: 'clarkkent@gmail.com',
    price: 1,
    password: '123',
    passwordConfirmation: '123'
  },
  {
    id: v4(),
    firstName: 'Peter',
    lastName: 'Parkers',
    countryCode: '',
    phoneNumber: '598661709',
    email: 'peterparkers@gmail.com',
    price: 10,
    password: '123',
    passwordConfirmation: '123'
  },
  {
    id: v4(),
    firstName: 'Vakhtang',
    lastName: 'Nodadze',
    phoneNumber: '598661708',
    countryCode: '',
    price: 50,
    password: '123',
    passwordConfirmation: '123'
  }
];

export default hairdressers;