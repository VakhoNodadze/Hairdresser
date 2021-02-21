import { styled } from 'styled/themes';


const Slider = styled.span `
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    transition: .4s;
    background-color: ${({ theme }) => theme.colors.togglerBg};
    &:before{
        position: absolute;
        content: "";
        height: 13px;
        width: 13px;
        right: 0;
        bottom: 1px;
        transition: all 0.2s;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.togglerColor};
    }
  &:after{
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    top: 0;
    transform: translate(10%, 20%);
    left: 0;
    bottom: 1px;
    transition: all 0.2s;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.sunMoonBg};
  }
`;

interface Props {
    [x:string]: any;
}

const SwitchLabel = styled.label <Props>`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 15px;
     & input {
         opacity: 0;
         width: 0;
         height: 0;
     }
  & input:checked ${Slider}{
    background: red;
    transform: translateX(-15px);
  }
    & > input:checked + ${Slider}:before{
        transform: translateX(-15px);
    }
  & > input:checked + ${Slider}:after{
    transform: translate(150%, 20%);
    box-shadow: 2px 1px 1px 1px #FFFFFF;
    background-color: transparent;
  }
`;


export { SwitchLabel, Slider };