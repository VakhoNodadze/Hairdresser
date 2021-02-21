import { css } from 'styled-components';
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

type SystemProps = ThemeProps & SpaceProps & LayoutProps & TypographyProps & ColorProps & FlexboxProps & BorderProps
interface Props extends SystemProps{
  fontSize: keyof typeof fontSizes;
  color?: keyof typeof colorCheme;
  fluid?: boolean;
  isDisabled?: boolean;
  isCircular?: boolean;
  [x:string]: any;
  variant: any;
}

const StyledContainer = styled.button<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes[props.fontSize]};
  border-radius: 5px;
  padding: ${({ theme }) => theme.space.default};
  /* box-shadow: 0px 4px 8px rgba(33, 106, 233, 0.6); */
  transform: scale(1);
  cursor: pointer;
  opacity: 1;
  transition: all 300ms linear;
  ${(props) => {
    switch (props.variant) {
    case 'basic':
      return css`
          background-color: transparent;
          border: 1px solid ${({ theme }) => theme.colors.blue200};
          color: ${({ theme }) => theme.colors.black};
          padding: ${({ theme }) => `${theme.space.tiny} ${theme.space.default}`};
          border-radius: ${({ theme }) => theme.radii.dwarf};
          box-shadow: none;
        &:hover{
          background-color: ${({ theme }) => theme.colors.blue200};
          color: ${({ theme }) => theme.colors.white};
          border: 0;
        }
        `;
    default:
      return css`
          background-color: ${({ theme }) => theme.colors.blue200};
          color: ${({ theme }) => theme.colors.whiteBlack};
          border-radius: 8px;
          border: 0;
          box-shadow: none;
        `;
    }
  }};
  ${space};
  ${color};
  ${border};
  ${layout};
  ${typography};
  width: ${(props) => (props.fluid ? '100%' : 'auto')};
};
  ${(props) =>
    props.isDisabled &&
  css`
      opacity: 0.94;
      color: ${props.theme.colors.disabledColor};
      background-color: ${props.theme.colors.disabledBg};
      cursor: default !important;
    `};
  ${(props) =>
    props.isCircular &&
  css`
      border-radius: ${props.theme.radii.rounded};
    `};
  &:active,
  &:focus {
    outline: 0;
  }
  &:active {
    transform: scale(0.96);
  }
`;


interface IconProps {
  isActive: boolean;
  [x:string]: any;
}

const StyledStartIcon = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: transform 0.6s ease;

  transform: ${(props) => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export { StyledContainer, StyledStartIcon };
