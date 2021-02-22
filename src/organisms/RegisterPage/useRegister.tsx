import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { registerUser } from 'redux/ducks/hairdressers';
import * as Yup from 'yup';
import { v4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { phoneRegExp, emailRegexp } from 'utils/Regex';
import { message } from 'antd';



const barberSchema = Yup.object().shape({
  // firstName: Yup.string().required('First name is required'),
  // lastName: Yup.string().required('Last name is required'),
  price: Yup.string().required('Price is required'),
  email: Yup.string().matches(emailRegexp, 'Email is not valid').required(),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  password: Yup.string().min(8).required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords must match',
  )
});

const clientSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  password: Yup.string().min(8).required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords must match',
  ).required('Both passwords are required')
});
const useRegistration = () => {
  const [registerAddresser, setRegisterAddresser] = useState('client');
  const {
    handleSubmit,
    register,
    errors
  } = useForm<RegistrationFormType>({
    resolver: yupResolver(registerAddresser === 'client' ? clientSchema : barberSchema)
  });

  console.log(errors);
  const dispatch = useDispatch();

  const registerHairdresser = () => {
    setRegisterAddresser('hairdresser');
  };

  const registerClient = () => {
    setRegisterAddresser('client');
  };

  const { push } = useHistory();

  const onSubmit = (data:any, e: any) => {
    e.preventDefault();
    console.log('data', data);
    dispatch(registerUser({ isUser: registerAddresser === 'client', ...data, id: v4(), review: [] }));
    push('/auth/login');
    message.success('User Registered!');
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    registerAddresser,
    registerClient,
    registerHairdresser
  };
};

export default useRegistration;
