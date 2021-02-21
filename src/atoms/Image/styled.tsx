import { sizes, styled } from 'styled/themes';

interface StyledItemProps {
  size: keyof typeof sizes;
}

const StyledContainer = styled.div<StyledItemProps>`
  width: ${(props) => props.theme.sizes[props.size]};

  img {
    width: 100%;
  }
`;

export { StyledContainer };
