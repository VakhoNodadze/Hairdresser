import { css } from 'styled-components';
import { styled, colorCheme } from 'styled/themes';

interface Props {
  clickable: boolean;
  color: keyof typeof colorCheme;
}

const StyledContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 18px 22px;
  /* background-color: #fff; */
  width: 100%;
  border-radius: ${(props) => props.theme.radii.big};
  box-shadow: ${(props) => props.theme.radii.default};
  box-sizing: border-box;

  ${(props) => {
    switch (props.color) {
    case 'primaryTxt':
      return css`
          background: linear-gradient(
            0deg,
            ${props.theme.colors.primaryTxt} 0%,
            ${props.theme.colors.primaryTxt} 35%,
            #269afe 90%
          );
        `;
    default:
      return css`
          background-color: ${({ theme }) => theme.colors[props.color]};
        `;
    }
  }};

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;

      &:hover {
        // box-shadow: ${(props) => props.theme.boxShadow.primary};
        opacity: 0.94;
      }
    `};
`;

export { StyledContainer };
