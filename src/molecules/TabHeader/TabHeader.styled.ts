import { Row } from 'antd';
import styled from 'styled-components';

export const TabBarHeaderStyled = styled(Row)`
  height: 4.6rem;
  background: #5c5cc2 0% 0% no-repeat padding-box;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  padding: 0 3rem;
  margin: 0 1rem;

  @media only screen and (max-width: 1370px) {
    height: 4rem;
  }
`;
