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
      {/*// TODO: should do a mapping for better readability*/}
      <Flex direction='column' width='100%'>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}
          style={{ position: 'relative' }}>
          <Text fontSize='xs' width='30%'>
                      Please Enter your phone number
          </Text>
          <Input bg='rgb(246, 249, 252)' name='phoneNumber' fontSize='lg' p={theme.space.tiny}
            register={register} />
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.phoneNumber?.message}
          </Text>
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}
          style={{ position: 'relative' }}>
          <Text fontSize='xs' width='30%'>
                  Please Enter your First Name
          </Text>
          <Input bg='rgb(246, 249, 252)' name='firstName' fontSize='lg' p={theme.space.tiny} register={register}/>
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.firstName?.message}
          </Text>
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}
          style={{ position: 'relative' }}>
          <Text fontSize='xs' width='30%' >
                  Please Enter your Last Name
          </Text>
          <Input bg='rgb(246, 249, 252)' name='lastName' fontSize='lg' p={theme.space.tiny} register={register}/>
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.lastName?.message}
          </Text>
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}
          style={{ position: 'relative' }}>
          <Text fontSize='xs' width='30%' >
            Please Enter your Email
          </Text>
          <Input bg='rgb(246, 249, 252)' name='email' fontSize='lg' p={theme.space.tiny} register={register}/>
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.email?.message}
          </Text>
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}
          style={{ position: 'relative' }}>
          <Text fontSize='xs' width='30%' >
                  Please Enter your Price
          </Text>
          <Input bg='rgb(246, 249, 252)' name='price' fontSize='lg' p={theme.space.tiny} register={register}
          />
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.price?.message}
          </Text>
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}
          style={{ position: 'relative' }}>
          <Text fontSize='xs' width='30%' >
                  Please Enter your password
          </Text>
          <Input bg='rgb(246, 249, 252)' name='password' fontSize='lg' p={theme.space.tiny} register={register}
            type='password' />
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.password?.message}
          </Text>
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.tiny}
          style={{ position: 'relative' }}>
          <Text fontSize='xs' width='30%' >
                 Confirm your password
          </Text>
          <Input bg='rgb(246, 249, 252)' name='passwordConfirmation' fontSize='lg' p={theme.space.tiny}
            register={register} type='password' />
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.passwordConfirmation?.message}
          </Text>
        </Flex>
      </Flex>
    </>
  );

  const renderClientRegister = () => (
    <>
      <Flex direction='column' width='100%'>
        <Flex justify='between' width='70%' m='auto'
          style={{ position: 'relative' }}>
          <Text width='30%'>Please enter your phone number</Text>
          <Input bg='rgb(246, 249, 252)' name='phoneNumber' fontSize='lg' p={theme.space.tiny}
            register={register} />
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.phoneNumber?.message}
          </Text>
        </Flex>
        <Flex justify='between' width='70%' m='auto'
          style={{ position: 'relative' }}>
          <Text fontSize='xs' width='30%'>
                    Please Enter your password
          </Text>
          <Input bg='rgb(246, 249, 252)' name='password' fontSize='lg' p={theme.space.tiny} register={register}
            type='password' my={theme.space.tiny} />
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.password?.message}
          </Text>
        </Flex>
        <Flex justify='between' width='70%' margin='auto' align='center' my={theme.space.mid}
          style={{ position: 'relative' }}>
          <Text fontSize='xs' width='30%' >
                  Confirm your password
          </Text>
          <Input bg='rgb(246, 249, 252)' name='passwordConfirmation' fontSize='lg' p={theme.space.tiny}
            register={register} type='password' />
          <Text mr={theme.space.default} color='red400'
            style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(0, 50%)' }}>
            {errors.passwordConfirmation?.message}
          </Text>
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
