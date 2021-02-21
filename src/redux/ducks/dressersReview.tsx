const UPDATE_REVIEW = 'UPDATE_REVIEW';

export interface chosenDresser {
    id: string;
}

export interface INITIALSTATE {
    chosenDressers: string[];
}

export interface AUTHACTION {
    type: typeof UPDATE_REVIEW;
    payload: string;
}

export type Action = AUTHACTION


export default (state: INITIALSTATE = { chosenDressers: [] }, action: Action) : INITIALSTATE => {
  switch (action.type){
  case UPDATE_REVIEW:
    return {
      ...state,
      chosenDressers: [...state.chosenDressers, action.payload]
    };
  default:
    return state;
  }
};

export const addDresser = (data: string) : AUTHACTION => {
  return {
    type: UPDATE_REVIEW,
    payload: data
  };
};
