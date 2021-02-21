import styled, { css } from 'styled-components';

export const LoginPageStyled = styled.form`
  width: 100%;
  min-height: 18.75rem;
  padding: 3vh 0;
  .top-content {
    padding: 0 2.5rem;
    .content__image-container {
      height: 7.9rem;
      width: auto;
      border-right: 1px solid #e3ebf3;
      padding-right: 2.3rem;
      padding-left: 1rem;
      img {
        height: inherit;
        object-fit: contain;
        width: 100%;
      }
    }
    .content__email-and-user {
      margin-left: 2.5rem;
      flex: 2;
      .user {
        .user__btn-use-different {
          margin-top: 0.1rem;
          color: #5c5bc1;
          font-size: 1.3125rem;
          text-transform: uppercase;
          padding: 0;
        }
      }
      .email {
        margin-right: 1.6rem;
      }
    }
    .content__password {
      flex: 1.4;
      padding-right: 1rem;
      .password__forgot {
        color: #5c5bc1;
        margin-top: 0.5rem;
        padding: 0;
        font-size: 1rem;
        position: absolute;
      }
    }
  }
  .line-loader {
    margin-top: 2.5rem;
  }
  .content__submit-container {
    padding: 0 2.5rem;
    .checkbox {
      p {
        font-family: ${({ theme }) => theme.fontFamilies.semiBold};
        font-weight: 600;
        margin-left: 0.5rem;
      }
    }
    .btn {
      height: 4rem;
      border-radius: 2rem;
      width: 20rem;
      margin-left: 30%;
    }
  }
`;

type ToggleNewUserStyledPropsType = {
  useNewUser: boolean;
};

export const ToggleNewUserStyled = styled.div<ToggleNewUserStyledPropsType>`
  margin-left: 2.5rem;
  flex: 2;
  .user {
    .user__btn-use-different {
      margin-top: 0.1rem;
      color: #5c5bc1;
      font-size: 1.3125rem;
      text-transform: uppercase;
      padding: 0;
    }
  }
  .email {
    transition: all 100ms 50ms linear;
    visibility: hidden;
    position: absolute;
    opacity: 0;
  }

  ${({ useNewUser }) =>
    useNewUser &&
    css`
      .user {
        display: none;
      }
      .email {
        position: relative;
        visibility: visible;
        opacity: 1;
      }
    `}
`;
