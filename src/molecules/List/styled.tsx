import { styled } from 'styled/themes';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  TypographyProps,
  typography
} from 'styled-system';

type SystemProps = SpaceProps & LayoutProps & FlexboxProps & TypographyProps

interface Props extends SystemProps{
    hasBorderTop: boolean;
    hasBorderBottom: boolean;
}

const StyledItem = styled.div <Props> `
    position: relative;
    ${space};
    ${layout};
    ${flexbox};
    ${typography};
    ${({ hasBorderTop, theme }) => hasBorderTop && `
    &:before{
        content: "";
        position:absolute;
        top: -${theme.space.border};
        left:0;
        height: 5px;
        width:  100%;
        border-bottom-left-radius: 35%;
        border-bottom-right-radius: 35%;
        background: transparent;
        box-shadow: 0 18px 0 0 #522d5b;
    }
    `}
    ${({ hasBorderBottom, theme }) => hasBorderBottom && `
        border-bottom: 3px solid ${theme.colors.blue200};
    `}
`;

export { StyledItem };