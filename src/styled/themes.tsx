
import baseStyled, { ThemedStyledInterface } from 'styled-components';
export interface Fonts { 
  bold: string;
  regular: string; 
  light: string;
};
  
export interface FontSizes {
  xss: string;
  xs: string;
  sm: string;
  md: string;
  body: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
};
  
export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export interface ContainerMaxWidth {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export interface Grid {
  containerMaxWidth: ContainerMaxWidth;
  gutterWidth: string;
  colCount: number;
}

export interface LineHeights {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  body: string;
  body2: string;
  caption: string;
}
    
export interface Spacing {
  [key: number]: string;
  noSpacing: number;
  tiny: number;
  mini: number;
  small: number;
  default: number;
  big: number;
  large: number;
  extraLarge: number;
  huge: number;
  extraHuge: number;
}

export interface Sizes {
  dwarf: string;
  tiny: string;
  mid: string;
  small: string;
  default: string;
  big: string;
  large: string;
  huge: string;
}

export interface Colors {
  blackWhite: string;
  whiteBlack: string;
  primaryBg: string;
  secondaryBg: string;
  primaryTxt: string;
  primaryTxt2: string;
  secondaryTxt: string,
  secondaryTxt2: string,
  inputPlaceholder: string,
  inputBorder: string,
  inputBg: string,
  activeTxt: string;
  primaryIcons: string;
  sidebarBorder: string;
  dividerBg: string;
  chartRedBorder: string;
  chartRedBg: string;
  chartBg: string;
  chartBtnBgAct: string,
  chartBtnBgDis: string,
  chartBtnAct: string,
  chartBtnDis: string,
  chartBtnCol: string,
  sidebarArrow: string;
  togglerBg: string;
  togglerColor: string,
  sunMoonBg: string,
  border000: string,
  border100: string,
  disabledColor: string,
  disabledBg: string,
  modalHeader: string,

  //non-chaning colors
  white: string,
  black: string,
  blue100: string,
  blue200: string,
  gray000: string,
  gray100: string,
  gray200: string,
  gray300: string,
  gray400: string,
  yello000: string,
  yellow100: string,
  yellow200: string,
  yellow300: string,
  yello400: string,
  red000: string,
  red100: string,
  red200: string,
  red300: string,
  red400: string,
  green100: string,
  green300: string,
  borderLight: string,

  topbarBg: string;
  tabBorder: string,
  iconPurple: string,
  purpleBg: string
}

export interface BorderRadius {
  dwarf: string;
  tiny: string;
  small: string;
  default: string;
  big: string;
  circular: string;
  rounded: string;
}


export interface Space {
  dwarf: string;
  mini: string;
  tiny: string;
  small: string;
  default: string;
  border: string;
  field: string;
  mid: string;
  big: string;
  large: string;
  huge: string;
  xLarge: string;
}
export interface ThemeProps {
  theme: {
    mode: string;
    breakpoints: Breakpoints;
    grid: Grid;
    spacing: Spacing;
    sizes: Sizes;
    Colors: Colors;
    colors: Colors;
    fontSizes: FontSizes;
    fonts: Fonts;
    lineHeights: LineHeights;
    radii: BorderRadius;
    space: Space;
  }
};

const nonChangingColors = {
  white: '#ffff',
  black: '#000',
  blue100: '#347AFF',
  blue200: '#6563FF',

  gray000: '#EAEAEA',
  gray100: '#E0E0E0',
  gray200: '#8D8E90',
  gray300: '#6F7070',
  gray400: '#707070',

  yello000: '#FFEBAA',
  yellow100: '#FFDA9E',
  yellow200: '#FDD28A',
  yellow300: '#FFBF71',
  yello400: '#FFB339',

  red000: '#DD727C',
  red100: '#E66767',
  red200: '#EB5656',
  red300: '#D35151',
  red400: '#E22E2E',

  green100: '#72CB76',
  green300: '#68BA6C',
  borderLight: '#f0f0f0',

  topbarBg: 'rgba(31,48,68,.9)',
  tabBorder: '#7754F8',
  iconPurple: '#7754F8',
  purpleBg: '#F1EDFE'
};

// this is just to use strongly types props for styled-system
export const colorCheme = {
  blackWhite: '#000',
  whiteBlack: '#fff',
  primaryBg: '#F4F8FB',
  secondaryBg: '#fff',
  primaryTxt: '#707070',
  primaryTxt2: '#fff',
  secondaryTxt: '#fff',
  secondaryTxt2: '#919294',
  inputPlaceholder: '#919294',
  inputBg: '#393C40',
  inputBorder: '#484848',
  activeTxt: '#0000',
  primaryIcons: '#9BA4AE',
  sidebarBorder: '#000',
  dividerBg: '#707070',

  chartRedBorder: 'rgba(235, 86, 86, 1)',
  chartRedBg: 'rgba(235, 86, 86, 0.1)',
  chartBg: 'rgba(255, 255, 255, 1)',

  chartBtnBgAct: '#334457',
  chartBtnBgDis: '#F0F0F0',
  chartBtnAct: '#707070',
  chartBtnDis: '#B7B7B7',
  chartBtnCol: '#fff',

  sidebarArrow: '#F0ECFD',

  togglerBg: '#FFDA9E',
  togglerColor: '#FFFFFF',
  sunMoonBg: '#FFFFFF',
  border000: '#EFEFEF',
  border100: '#F0F0F0',
  disabledColor: 'rgba(255, 255, 255, .54)',
  disabledBg: 'rgba(255, 255, 255, .04)',
  modalHeader: '#F7F7FA',
  ...nonChangingColors
};

export const breakpoints = {
  xs: 0,
  sm: 700,
  md: 960,
  lg: 1280,
  xl: 1920
};

export const grid = {
  containerMaxWidth: {
    xs: 540,
    sm: 720,
    md: 960,
    lg: 1136,
    xl: 1236
  },
  gutterWidth: '16px',
  colCount: 12
};

export const spacing = {
  noSpacing: 0,
  tiny: 2,
  mini: 4,
  small: 6,
  default: 8,
  big: 16,
  large: 24,
  extraLarge: 32,
  huge: 38,
  extraHuge: 44
};

export const sizes = {
  dwarf: '1rem',
  tiny: '1.375rem',
  mid: '1.5rem',
  small: '2rem',
  default: '2.5rem',
  big: '3rem',
  large: '4.5rem',
  huge: '8rem'
};

export const fontSizes = {
  xss: '0.625rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  body: '16px',
  lg: '1.125rem',
  xl: '1.5rem',
  xxl: '2rem',
  xxxl: '3rem'
};

export const fonts = {
  regular: 'Helvetica-Regular'
};

export const lineHeights = {
  h1: '56px',
  h2: '40px',
  h3: '32px',
  h4: '24px',
  body: '24px',
  body2: '20px',
  caption: '16px'
};

export const radii = {
  dwarf: '3px',
  tiny: '4px',
  small: '5px',
  default: '6px',
  big: '8px',
  circular: '100%',
  rounded: '100rem'
};

export const space = {
  dwarf: '0.2rem',
  mini: '0.3rem',
  tiny: '0.5rem',
  small: '0.75rem',
  default: '1rem',
  border: '1.1875rem',
  field: '2.3rem',
  mid: '1.375rem',
  big: '1.5rem',
  large: '2rem',
  huge: '3rem',
  xLarge: '3.5rem'
};

const lightTheme = {
  mode: 'light',
  breakpoints: breakpoints,
  grid: grid,
  spacing: spacing,
  sizes: sizes,
  colors: {
    blackWhite: '#000',
    whiteBlack: '#fff',
    primaryBg: '#F4F8FB',
    secondaryBg: '#fff',
    primaryTxt: '#A0AAB1',
    primaryTxt2: '#fff',
    secondaryTxt: '#707070',
    secondaryTxt2: '#707070',
    inputPlaceholder: '#9BA4AE',
    inputBorder: '#EFEFEF',
    inputBg: '#fff',
    activeTxt: '#0000',
    primaryIcons: '#9BA4AE',
    sidebarBorder: '#000',
    dividerBg: '#707070',

    chartRedBorder: 'rgba(235, 86, 86, 1)',
    chartRedBg: 'rgba(235, 86, 86, 0.1)',
    chartBg: 'rgba(255, 255, 255, 1)',

    chartBtnBgAct: '#334457',
    chartBtnBgDis: '#F7F7FA',
    chartBtnAct: '#707070',
    chartBtnDis: '#B7B7B7',
    chartBtnCol: '#fff',

    sidebarArrow: '#F0ECFD',

    togglerBg: '#FFBF71',
    togglerColor: '#FFFFFF',
    sunMoonBg: '#FDD28A',

    border000: '#EFEFEF',
    border100: '#F0F0F0',

    disabledColor: 'rgba(0, 0, 0, .54)',
    disabledBg: 'rgba(0, 0, 0, .04)',
    modalHeader: '#F7F7FA',
    //non-changing colors
    ...nonChangingColors
  },
  fontSizes: fontSizes,
  fonts: fonts,
  lineHeights: lineHeights,
  radii: radii,
  space: space
}; 

const darkTheme = {
  mode: 'dark',
  breakpoints: breakpoints,
  grid: grid,
  spacing: spacing,
  sizes: sizes,
  colors: {
    blackWhite: '#fff',
    whiteBlack: '#000',
    primaryBg: '#22252A',
    secondaryBg: '#272B2F',
    primaryTxt: '#919294',
    primaryTxt2: '#000',
    secondaryTxt: '#fff',
    secondaryTxt2: '#919294',
    inputPlaceholder: '#919294',
    inputBg: '#393C40',
    inputBorder: '#484848',
    activeTxt: '#FFFFFF',
    primaryIcons: '#8D8E90',
    sidebarBorder: 'transparent',
    dividerBg: '#919294',

    chartRedBorder: 'rgba(235, 86, 86, 1)',
    chartRedBg: 'rgba(189, 65, 66, 0.2)',
    chartBg: 'rgba(34, 37, 42, 1)',

    chartBtnBgAct: '#22262B',
    chartBtnBgDis: '#54575A',
    chartBtnAct: '#919294',
    chartBtnDis: '#B7B7B7',
    chartBtnCol: '#fff',
    sidebarArrow: '#54575A',

    togglerBg: '#7754F8',
    togglerColor: '#FFFFFF',
    sunMoonBg: '#FFFFFF',

    border000: '#EFEFEF',
    border100: '#8D8E90',

    disabledColor: 'rgba(255, 255, 255, .54)',
    disabledBg: 'rgba(255, 255, 255, .04)',
    modalHeader: '#F7F7FA',

    //non-changing colors
    ...nonChangingColors
  },
  fontSizes: fontSizes,
  fonts: fonts,
  lineHeights: lineHeights,
  radii: radii,
  space: space
}; 
  
export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export { lightTheme, darkTheme };