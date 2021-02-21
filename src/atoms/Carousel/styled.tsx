import { css } from 'styled-components';
import { styled, spacing } from 'styled/themes';

interface ContainerProps {
  hasPrevNext?: boolean;
  spacing: keyof typeof spacing;
}

const StyledContainer = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  width: 100%;
  /* margin: ${(props) => (props.hasPrevNext ? '0 32px' : '0 -4px')}; */
  /* scroll-behavior: smooth;
  webkit-overflow-scrolling: touch; */
  margin 0px -${({ theme, spacing }) => theme.spacing[spacing]}px;
`;

interface ContentProps {
  spacing: keyof typeof spacing;
  columns: number;
  width: number;
}

const StyledContent = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  width: auto;
  overflow-x: hidden;
  transition: transform 0.3s linear;

  & > div.item {
    padding: 0 ${({ theme, spacing }) => theme.spacing[spacing]}px;

    ${(props) => {
    switch (props.columns) {
    default:
      return css`
            width: calc(${props.width}px / ${props.columns});
          `;
    }
  }};
  }
`;

const StyledArrow = styled.div`
  position: absolute;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  /* top: 0;
  height: 100%; */

  background-color: red;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  top: calc(50% - 12px);

  &.btn-prev {
    left: 0px;
    /* background: linear-gradient(to left, transparent, #fff 10%); */
  }
  &.btn-next {
    right: 0px;
    /* background: linear-gradient(to right, transparent, rgba(255, 255, 255, 1) 6%); */
  }
`;

const StyledItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledContainer, StyledContent, StyledArrow, StyledItem };
