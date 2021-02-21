import { css } from 'styled-components';
import { sizes, fontSizes, styled } from 'styled/themes';

interface Props{
  size: keyof typeof sizes;
  fontSize: keyof typeof fontSizes;
  avatar?: string | null;
  color?: string | null;
  borderColor?: string | null;
  rounded?: boolean | null;
  firstName?: string | null;
  lastName?: string | null;
  onClick?: Function | null;
  LabelIcon?: React.ReactNode | null;
  clickable: boolean;
  [x:string]: any;
}
const StyledContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: ${(props) => (props.rounded ? props.theme.radii.default : props.theme.radii.circular)};
  background-color: ${(props) => (props.color ? props.color : props.theme.colors.gray300)};
  min-width: ${({ theme, size }) => theme.sizes[size]};
  height: ${(props) => props.theme.sizes[props.size]};
  font-size: ${(props) => props.theme.fontSizes[props.fontSize]};
  color: ${({ theme }) => theme.colors.primaryTxt2}

  ${(props) =>
    props.borderColor &&
    css`
      border: 2px solid ${props.borderColor};
    `};

  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;
    `};
`;

const StyledContent = styled.div``;

export { StyledContainer, StyledContent };
