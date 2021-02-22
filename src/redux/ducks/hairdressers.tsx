import hairdressers from 'utils/DummyData/HairdressersData';
const REGISTER = 'REGISTER';
const REGISTER_HAIRDRESSER = 'REGISTER_HAIRDRESSER';
const UPDATE_REVIEW = 'UPDATE_REVIEW';

export interface REVIEW {
  score: number;
  comment: string;
}
export interface REGISTERPAYLOAD {
  id: string;
  firstName?: string;
  lastName?: string;
  phoneNumber: string;
  countryCode?: string;
  price: number;
  password: string;
  passwordConfirmation: string;
  review?: REVIEW[];
  isUser: boolean;
}

export interface INITIALSTATE {
  users: REGISTERPAYLOAD[];
}

export interface AUTHACTION {
  type: typeof REGISTER;
  payload: REGISTERPAYLOAD;
}
export interface REVIEWGIVE {
  review: REVIEW;
  id: string;
}

export interface UPDATEDRESSER {
  type: typeof UPDATE_REVIEW;
  payload: REVIEWGIVE;
}

export type Action = AUTHACTION | UPDATEDRESSER


export default (state: INITIALSTATE = { users: hairdressers }, action: Action) : INITIALSTATE => {
  switch (action.type){
  case REGISTER:
    return {
      ...state,
      users: [...state.users, action.payload]
    };
  case UPDATE_REVIEW:
    const user = state.users.find((user) => user.id === action.payload.id)!;
    user.review = [...user.review!, action.payload.review];
    return {
      ...state,
      users: [...state.users]
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


export const updateReview = (data: REVIEWGIVE) : UPDATEDRESSER => {
  return {
    type: UPDATE_REVIEW,
    payload: data
  };
};