import { styled } from 'styled/themes';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps
} from 'styled-system';
import { colorCheme } from 'styled/themes';

type SystemProps = SpaceProps & LayoutProps & ColorProps

interface Props extends SystemProps {
  isHidden?: boolean;
  size?: string;
  color?: keyof typeof colorCheme;
  [x:string]: any;
}

const StyledContainer = styled.div<Props>`
  display: inline-table;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: ${({ size }) => (size ? `${size} 0` : '6px 0')};
  height: ${({ isHidden }) => (isHidden ? 0 : '1px')};
  background-color: ${({ theme }) => theme.colors.dividerBg};
  opacity: 0.2;
  ${color}
`;

const StyledVertical = styled.div <Props> `
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  ${space}
  ${color}
  ${layout}
`;

export { StyledContainer, StyledVertical };
