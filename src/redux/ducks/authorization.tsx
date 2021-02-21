const MINIMIZE_SIDEBAR = 'MINIMIZE_SIDEBAR';
const SHOW_BURGER = 'SHOW_BURGER';

export interface SidebarState {
  isFullWidth: boolean;
  isBurgerMenuOpen: boolean
}

export interface SidebarWidthAction {
  type: typeof MINIMIZE_SIDEBAR;
};
export interface BurgerMenuAction {
  type: typeof SHOW_BURGER;
};

export type Action = SidebarWidthAction | BurgerMenuAction

const initialState= {
  isFullWidth: true,
  isBurgerMenuOpen: false
};

export default (state: SidebarState = initialState, action: Action): SidebarState => {
  switch (action.type){
  case MINIMIZE_SIDEBAR:
    return {
      ...state,
      isFullWidth: !state.isFullWidth
    };
  case SHOW_BURGER:
    return {
      ...state,
      isBurgerMenuOpen: !state.isBurgerMenuOpen
    };
  default: 
    return state;
  }
};

export const showFullWidthSidebar = ():SidebarWidthAction => {
  return {
    type: MINIMIZE_SIDEBAR
  };
};

export const showBurgerMenu = ():BurgerMenuAction => {
  return {
    type: SHOW_BURGER
  };
};