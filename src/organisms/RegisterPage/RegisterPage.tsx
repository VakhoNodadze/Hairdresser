import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { withTheme } from 'styled-components';
import { ThemeProps } from 'styled/themes';
import { Controller } from 'react-hook-form';

import { RegistrationPageStyled } from './RegisterPage.styled';
import Text from 'atoms/Text';
import Flex from 'atoms/Flex';
import Input from 'atoms/Input';
import Button from 'atoms/Button';
import useRegister from './useRegister';


interface Props extends ThemeProps{}

const RegistrationPage: FC <Props> = ({ theme }): React.ReactElement => {

  const {
    control,
    handleSubmit,
    onSubmit,
    register,
    errors,
    registerHairdresser,
    registerClient,
    registerAddresser
  } = useRegister();


  const renderClientColor = () => {
    let style = {};
    if(registerAddresser === 'client'){
      style = {
        color: 'black',
        fontWeight: 'bold'
      };
    }
    return style;
  };

  const renderHairdressertColor = () => {
    let style = {};
    if(registerAddresser === 'hairdresser'){
      style = {
        color: 'black',
        fontWeight: 'bold'
      };
    }
    return style;
  };

  const renderHairdresserRegister = () => (
    <>
      <Flex direction='column' width='100%'>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}>
          <Text fontSize='xs' width='30%'>
                      Please Enter your phone number
          </Text>
          <Controller
            name='phoneNumber'
            control={control}
            defaultValue=''
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='phoneNumber' fontSize='lg' p={theme.space.tiny}
                register={register} error={errors.phoneNumber} />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}>
          <Text fontSize='xs' width='30%' >
                  Please Enter your First Name
          </Text>
          <Controller
            name='firstName'
            control={control}
            defaultValue=''
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='firstName' fontSize='lg' p={theme.space.tiny} register={register}
                error={errors.firstName} />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}>
          <Text fontSize='xs' width='30%' >
                  Please Enter your Last Name
          </Text>
          <Controller
            name='lastName'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='lastName' fontSize='lg' p={theme.space.tiny} register={register}
                error={errors.lastName} />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}>
          <Text fontSize='xs' width='30%' >
                  Please Enter your Price
          </Text>
          <Controller
            name='price'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='price' fontSize='lg' p={theme.space.tiny} register={register}
                error={errors.price}/>;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}>
          <Text fontSize='xs' width='30%' >
                  Please Enter your password
          </Text>
          <Controller
            name='password'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='password' fontSize='lg' p={theme.space.tiny} register={register}
                type='password' error={errors.password} />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}>
          <Text fontSize='xs' width='30%' >
                 Confirm your password
          </Text>
          <Controller
            defaultValue=''
            name='passwordConfirmation'
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='passwordConfirmation' fontSize='lg' p={theme.space.tiny}
                register={register} type='password' error={errors.password_confirmation} />;
            }}
          />
        </Flex>
      </Flex>
    </>
  );

  const renderClientRegister = () => (
    <>
      <Flex direction='column' width='100%'>
        <Flex justify='between' width='70%' m='auto'>
          <Text width='30%'>Please enter your phone number</Text>
          <Controller
            name='phoneNumber'
            control={control}
            defaultValue=''
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='' fontSize='lg' p={theme.space.tiny}
                // @ts-ignore
                register={register} error={errors.phoneNumber}/>;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' m='auto'>
          <Text fontSize='xs' width='30%'>
                    Please Enter your password
          </Text>
          <Controller
            name='password'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='password' fontSize='lg' p={theme.space.tiny} register={register}
                type='password' error={errors.password} />;
            }}
          />
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}>
          <Text fontSize='xs' width='30%' >
                  Confirm your password
          </Text>
          <Controller
            name='passwordConfirmation'
            defaultValue=''
            control={control}
            as={() => {
              return <Input bg='rgb(246, 249, 252)' name='passwordConfirmation' fontSize='lg' p={theme.space.tiny}
                register={register} type='password' error={errors.password_confirmation} />;
            }}
          />
        </Flex>
      </Flex>
    </>
  );

  return (
    <RegistrationPageStyled onSubmit={handleSubmit(onSubmit)}>
      <Col span={24} className={'content__form-container'}>
      </Col>
      <Row
        align={'middle'}
        justify={'end'}
        className={'content__submit-container'}
      >
        <Flex width='50%' mx='auto' justify='between' mb={theme.space.large}>
          <Text style={{ cursor: 'pointer' }} onClick={registerClient}>
              Register as <Text display='inline' color='blue200' span style={renderClientColor()}>
              Client</Text>
          </Text>
          <Text style={{ cursor: 'pointer' }} onClick={registerHairdresser}>
              Register as <Text display='inline' color='blue200' span style={renderHairdressertColor()}>
              Hairdresser
            </Text>
          </Text>
        </Flex>
        {registerAddresser === 'client' ? renderClientRegister() : renderHairdresserRegister()}
        <Button>
              Submit
        </Button>
      </Row>
    </RegistrationPageStyled>
  );
};

export default withTheme(RegistrationPage);
