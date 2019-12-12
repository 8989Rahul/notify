import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Input} from 'react-native-elements';

const InputFiled = styled(Input).attrs(() => ({
  inputContainerStyle: {
    backgroundColor: '#ffffff',
    borderColor: 'transparent',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    height: 50,
    marginTop: -25,
  },
  inputStyle: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#626060',
  },
}))``;

const DescriptionFiled = styled(Input).attrs(() => ({
  inputContainerStyle: {
    marginTop: 12,
    backgroundColor: '#ffffff',
    borderColor: 'transparent',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  inputStyle: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#626060',
  },
}))``;

const Subject = () => {
  const [Description, setDescription] = useState('Description');

  return (
    <Wrapper>
      <InputFiled placeholderTextColor="#cbcbcb" placeholder="Email Id" />
      <DescriptionFiled
        multiline={true}
        numberOfLines={4}
        placeholderTextColor="#cbcbcb"
        onChangeText={text => setDescription({text})}
        value={Description}
      />
    </Wrapper>
  );
};

export default Subject;

const Wrapper = styled.View`
  padding-horizontal: 0px;
`;
