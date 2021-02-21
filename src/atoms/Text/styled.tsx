import { styled, fontSizes, colorCheme } from 'styled/themes';

import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  typography,
  TypographyProps,
  color,
  ColorProps
} from 'styled-system';
  
type SystemProps = SpaceProps & LayoutProps & TypographyProps & ColorProps & FlexboxProps
interface Props extends SystemProps{
    fontSize: keyof typeof fontSizes;
    color: keyof typeof colorCheme;
    hover?: boolean;
    [x:string]: any;
}

const StyledContainer = styled.p<Props> `
    &:hover{
        color: ${({ hover, theme }) => (hover ? theme.colors.blackWhite : null)};
    }
    ${space};
    ${layout};
    ${typography};
    ${color};
    ${flexbox};

`;

const StyledSpan = styled.span<Props> `
    line-height: 100%;
    &:hover{
        color: ${({ hover, theme }) => (hover ? theme.colors.blackWhite : null)};
    }
    ${space};
    ${layout};
    ${typography};
    ${color};
    ${flexbox};
`;

// StyledContainer.defaultProps = {
//   color: 'primaryTxt2'
// };

export { StyledContainer, StyledSpan };