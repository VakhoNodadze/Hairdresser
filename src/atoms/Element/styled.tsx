import styled from 'styled-components';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  color,
  ColorProps,
  border,
  BorderProps,
  TypographyProps,
  typography,
  system
} from 'styled-system';

type StyledProps = SpaceProps & LayoutProps & FlexboxProps & ColorProps & BorderProps & TypographyProps

interface Props extends StyledProps{
  hasBorder: boolean;
}

const StyledElement = styled.div<Props>`
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${border}
  ${typography}
  ${system({
    cursor: true
  })}
  ${system({
    transform: true
  })}
  ${system({
    transformOrigin: true
  })}
  ${system({
    pointerEvents: true
  })}
  ${system({
    transition: true
  })}
  ${system({
    content: true
  })}
  ${({ hasBorder, theme }) => hasBorder && `
  &:before{
      content: "";
      position:absolute;
      top: -${theme.space.field};
      left:0;
      height: 5px;
      width:  100%;
      border-bottom-left-radius: 35%;
      border-bottom-right-radius: 35%;
      background: transparent;
      box-shadow: 0 18px 0 0 #522d5b;
  }
  `}
`;

export { StyledElement };
