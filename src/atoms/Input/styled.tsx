import { styled } from 'styled/themes';
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

const StyledContainer = styled.input `
  width: 90px;
  height: 100%;
  
  color: ${({ theme }) => theme.colors.primaryIcons};
  background-color: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 0 5px 5px 0;
  border-left: 0;
  
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

export { StyledContainer };