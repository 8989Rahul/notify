import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Button, Icon, Input} from 'react-native-elements';

const AppTitle = styled.Text`
  padding-bottom: 40;
  padding-top: 20;
  padding-left: 10;
  font-size: 75;
  color: #fff;
  font-weight: bold;
`;

const Text = styled.Text`
  padding-top: 10;
  text-align: center;
  font-size: 20;
  color: #d8d8d8;
  font-style: italic;
`;
const TextWithGoogle = styled.Text`
  padding-top: 10;
  text-align: center;
  font-size: 20;
  color: #d8d8d8;
`;

const SignupText = styled.Text`
  padding-top: 10;
  text-align: center;
  font-size: 20;
  color: yellow;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: #262020;
  padding-top: 20;
  width: 100%;
`;
const InputFiled = styled(Input).attrs(() => ({
  inputContainerStyle: {
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#5a3d5c',
    borderColor: 'transparent',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    height: 70,
  },
  inputStyle: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#fff',
  },
}))``;

const SignupButton = styled(Button).attrs(() => ({
  buttonStyle: {
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 20,
    backgroundColor: '#f638dc',
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    height: 70,
  },
  titleStyle: {
    color: '#fff',
    fontSize: 20,
  },
}))``;

const Login = () => {
  return (
    <Wrapper>
      <AppTitle>LOGIN</AppTitle>
      <InputFiled
        placeholderTextColor="#fff"
        placeholder="Email Id"
        leftIcon={<Icon type="feather" name="users" size={24} color="#fff" />}
      />
      <InputFiled
        secureTextEntry={true}
        placeholderTextColor="#fff"
        placeholder="Password"
        leftIcon={
          <Icon
            type="MaterialCommunityIcons"
            name="bell-o"
            size={26}
            color="#fff"
          />
        }
      />
      <SignupButton title="Signup" />
      <TouchableOpacity>
        <TextWithGoogle> With Google</TextWithGoogle>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text> Dont Have an Account?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <SignupText> Signup Here!</SignupText>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Login;
