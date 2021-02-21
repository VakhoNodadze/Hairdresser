import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { AppState } from 'redux/ducks';
import { REGISTERPAYLOAD, registerUser } from 'redux/ducks/hairdressers';
import * as Yup from 'yup';
import { v4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { phoneRegExp } from 'utils/Regex';



const schema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  countryCode: Yup.string().required(),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  password: Yup.string().min(8).required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords must match',
  )
});

const clientSchema = Yup.object().shape({
  countryCode: Yup.string().required(),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  password: Yup.string().min(8).required('Password is required'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords must match',
  )
});
const useRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [registerAddresser, setRegisterAddresser] = useState('client');
  const [fieldData, setFieldData] = useState();
  const {
    handleSubmit,
    control,
    setValue,
    register,
    watch,
    errors,
    setError
  } = useForm<RegistrationFormType>({
    // resolver: yupResolver(registerAddresser === 'client' ? clientSchema : schema),
    shouldFocusError: true
  });

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
    dispatch(registerUser({ isUser: registerAddresser === 'client', ...data, id: v4() }));
  };

  return {
    loading,
    setLoading,
    onSubmit,
    handleSubmit,
    control,
    setValue,
    register,
    watch,
    errors,
    fieldData,
    registerAddresser,
    registerClient,
    registerHairdresser
  };
};

export default useRegistration;
