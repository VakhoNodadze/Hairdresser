const REGISTER = 'REGISTER';

export interface REGISTERPAYLOAD {
  id: number;
  isRegistered: boolean;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
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

const initialState = {
  id: 0,
  isRegistered: false,
  firstName: '',
  lastName: '',
  phoneNumber: '598661708',
  countryCode: '',
  password: '123',
  passwordConfirmation: '123'
};

export default (state: INITIALSTATE = { users:[initialState] }, action: Action) : INITIALSTATE => {
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
