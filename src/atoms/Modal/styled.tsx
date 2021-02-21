import { styled } from 'styled/themes';

interface Props {
  fadeType?: string
}

const StyledOverlay = styled.div<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return '1';
    default:
      return '0';
    }
  }};
  transition: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'opacity 0.1s ease-in-out';
    case 'out':
      return 'opacity 0.1s ease-in-out';
    default:
      return 'all 0.2s ease-in';
    }
  }};
`;

interface ContainerProps extends Props{
  scrolling?: boolean;
  size?: string;
}
const StyledContainer = styled.div<ContainerProps>`
  position: absolute;
  top: ${(props) => (props.scrolling ? '8%' : 'unset')};
  margin-bottom: ${(props) => (props.scrolling ? '8%' : 'unset')};
  min-height: 200px;
  min-width: 240px;
  max-height: ${(props) => (props.scrolling ? 'unset' : '90vh')};
  max-width: 96%;
  width: ${(props) => {
    switch (props.size) {
    case 'large':
      return '940px';
    case 'medium':
      return '800px';
    case 'small':
      return '450px';
    default:
      return '600px';
    }
  }};
  border-radius: ${({ theme }) => theme.radii.big};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  transform: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'scale(1)';
    default:
      return 'scale(0.82)';
    }
  }};
  transition: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'transform 0.1s';
    case 'out':
      return 'transform 0.1s';
    default:
      return '';
    }
  }};

  .content {
    max-height: ${(props) => (props.scrolling ? 'unset' : '80vh')};
  }
`;

const StyledContent = styled.div`
  padding: ${(props) => props.theme.spacing.extraHuge}px ${(props) => props.theme.spacing.huge}px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 0 0 5px 5px
  /* max-height: 80vh; */
`;

const StyledHeader = styled.div`
  width: 100%;
  color: #fff;
  margin: 0;
  padding: ${(props) => props.theme.space.small};
  border-radius: ${({ theme }) => theme.radii.big};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${(props) => props.theme.colors.modalHeader};
`;

// const StyledClose = styled.div`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   border: solid 1px #f1f3f4;
//   border-radius: 10rem;
//   cursor: pointer;
//   display: flex;
//   height: 34px;
//   width: 34px;
//   justify-content: center;
//   align-items: center;
// `;

const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 1px solid ${(props) => props.theme.colors.border000};
  background-color: ${(props) => props.theme.colors.primaryBg};
  padding: ${(props) => props.theme.spacing.large}px;

  & > button {
    margin: 0 8px;
    min-width: 94px;
  }
`;

export { StyledOverlay, StyledContainer, StyledContent, StyledHeader, StyledActions };
