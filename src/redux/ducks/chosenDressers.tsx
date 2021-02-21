const CHOSE_DRESSER = 'CHOSE_DRESSER';

export interface chosenDresser {
    id: string;
}

export interface INITIALSTATE {
    chosenDressers: string[];
}

export interface AUTHACTION {
    type: typeof CHOSE_DRESSER;
    payload: string;
}

export type Action = AUTHACTION


export default (state: INITIALSTATE = { chosenDressers: [] }, action: Action) : INITIALSTATE => {
  switch (action.type){
  case CHOSE_DRESSER:
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
    type: CHOSE_DRESSER,
    payload: data
  };
};
