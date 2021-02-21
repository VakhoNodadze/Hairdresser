import hairdressers from '../Hairdressers';
const REGISTER = 'REGISTER';

export interface REGISTERPAYLOAD {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  price: number;
  password: string;
  passwordConfirmation: string;
}

export interface INITIALSTATE {
  users: REGISTERPAYLOAD[];
}

export interface AUTHACTION {
  type: typeof REGISTER;
  payload: REGISTERPAYLOAD;
}

export type Action = AUTHACTION


export default (state: INITIALSTATE = { users: hairdressers }, action: Action) : INITIALSTATE => {
  switch (action.type){
  case REGISTER:
    return {
      ...state,
      users: [...state.users, action.payload]
    };
  default: 
    return state;
  }
};

export const registerUser = (data: REGISTERPAYLOAD) : AUTHACTION => {
  return {
    type: REGISTER,
    payload: data
  };
};
