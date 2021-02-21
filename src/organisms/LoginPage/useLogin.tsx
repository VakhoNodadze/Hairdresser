import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppState } from 'redux/ducks';
import { REGISTERPAYLOAD } from 'redux/ducks/hairdressers';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { message } from 'antd';

import { useHistory } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  stayLoggedIn: Yup.boolean()
});

const useRegistration = () => {

  const { fontFamilies } = useContext(ThemeContext);
  const { handleSubmit, control, errors, setValue, register } = useForm<loginFormType>({
    // resolver: yupResolver(schema),
    shouldFocusError: true
  });
  const [loading, setLoading] = useState(false);
  const users = useSelector<AppState, REGISTERPAYLOAD[]>((state) => state.register.users);

  const { replace } = useHistory();


  useEffect(() => {
    const objKeys = Object.keys(errors) as (keyof typeof errors)[];

    if (objKeys.length) {
      message.error(errors[objKeys[0]]?.message ?? '');
    }
  }, [errors]);

  const onSubmit = (data:any, e: any) => {
    e.preventDefault();
    for(let i = 0; i < users.length; i++){
      if(users[i].phoneNumber === data.phoneNumber && users[i].password === data.password){
        if(users[i].isUser){
          replace('/hairdressers');
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
        }else{
          message.error('You are trying to log in as hairdresser');
        }
      }
    }
    message.error('Invalid user or password');
    
  };

  return {
    loading,
    setLoading,
    onSubmit,
    handleSubmit,
    control,
    errors,
    register,
    fontFamilies
  };
};

export default useRegistration;
