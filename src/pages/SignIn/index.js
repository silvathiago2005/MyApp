import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';
import { AuthContext } from '../../contexts/auth'; 

export default function SignIn(){
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password);
  }

  return (
    <Background>
      <Container behavior={ Platform.OS === 'ios' ? 'padding' : '' } enabled>
        <AreaInput>
          <Input 
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={ (text) => setPassword(text) }
          />
        </AreaInput>
        <SubmitButton onPress={ handleLogin }>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
          <LinkText>Esqueci a senha</LinkText>
        </Link>
      </Container>
    </Background>
  );
}