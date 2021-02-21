import styled from 'styled-components';

export const RegistrationPageStyled = styled.form`
  width: 100%;
  padding: 3vh 0;
  .content__form-container {
    padding: 0 2.5rem;

    & > div:last-child {
      border-bottom: 0 !important;
    }
  }
  .content__submit-container {
    padding: 0 2.5rem;
    .checkbox {
      p {
        font-weight: 600;
        margin-left: 0.5rem;
      }
    }
    .btn {
      height: 4rem;
      border-radius: 2rem;
      width: 20rem;
      margin-left: 20%;
    }
  }

  @media only screen and (max-width: 1370px) {
    padding: 2vh 0;
  }
`;
