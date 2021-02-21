import { styled, ThemeProps, fontSizes, colorCheme } from 'styled/themes';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  FlexboxProps,
  color,
  ColorProps,
  border,
  BorderProps,
  TypographyProps,
  typography
} from 'styled-system';
import { Simulate } from 'react-dom/test-utils';


type SystemProps = ThemeProps & SpaceProps & LayoutProps & TypographyProps & ColorProps & FlexboxProps & BorderProps

interface Props extends SystemProps{
  fontSize: keyof typeof fontSizes;
  color?: keyof typeof colorCheme;
  fluid?: boolean;
  isDisabled?: boolean;
  isCircular?: boolean;
  [x:string]: any;
  variant: any;
  error: boolean;
}

const StyledContainer = styled.div `
  position: relative;
  width: 100%;
  min-width: 200px;
  height: 50px;
`;

const StyledError = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0%, 50%);
  margin-right: 10px;
  color: red;
`;

const StyledInput = styled.input<Props> `
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.primaryIcons};
  background-color: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.red400 : theme.colors.inputBorder)};
  border-radius: 0 5px 5px 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding-left: ${({ theme }) => theme.space.tiny};
  &::placeholder{
    color: ${({ theme }) => theme.colors.inputPlaceholder}
  }
  ${space};
  ${color};
  ${border};
  ${layout};
  ${typography};
`;

export { StyledContainer, StyledInput, StyledError };