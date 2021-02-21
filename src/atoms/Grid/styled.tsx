import { css } from 'styled-components';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps
} from 'styled-system';
import { spacing, styled } from 'styled/themes';

import { breakpoints } from 'styled/themes';


type SystemProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps & BorderProps
interface StyledContainerProps extends SystemProps {
  spacing: keyof typeof spacing;
  [x:string]: any;
}

interface StyledItemProps extends SystemProps{
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  fluid: boolean;
  [x:string]: any;
}

const StyledContainer = styled.div<StyledContainerProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  // flex-grow: 1;
  width: calc(100% + ${({ theme, spacing }) => theme.spacing[spacing]}px);
  margin: 0 -${({ theme, spacing }) => theme.spacing[spacing]}px;
  
/*
  ${(props) =>
    props.spacing &&
    css`
      & > .item {
        padding: ${({ theme }) => theme.space[props.spacing]};
      }
    `};
  */
`;

const StyledItem = styled.div<StyledItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 0;
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${border}

  ${(props) =>
    props.xs && !props.fluid &&
    `
    @media (min-width: ${breakpoints.xs}px) {
      width: ${Math.round((props.xs / 12) * 10e7) / 10e5}%;
    }
  `}

  ${(props) =>
    props.sm && !props.fluid &&
    `
    @media (min-width: ${breakpoints.sm}px) {
      width: ${Math.round((props.sm / 12) * 10e7) / 10e5}%;
    }
  `}

  ${(props) =>
    props.md && !props.fluid &&
    `
    @media (min-width: ${breakpoints.md}px) {
      width: ${Math.round((props.md / 12) * 10e7) / 10e5}%;
    }
  `}

  ${(props) =>
    props.lg && !props.fluid &&
    `
    @media (min-width: ${breakpoints.lg}px) {
      width: ${Math.round((props.lg / 12) * 10e7) / 10e5}%;
    }
  `}

  ${(props) =>
    props.xl && !props.fluid &&
    `
    @media (min-width: ${breakpoints.xl}px) {
      width: ${Math.round((props.xl / 12) * 10e7) / 10e5}%;
    }
  `}
`;

export { StyledContainer, StyledItem };
