import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const Save = () => {
  return (
    <Wrapper>
      <TouchableOpacity>
        <Button>Save</Button>
      </TouchableOpacity>
    </Wrapper>
  );
};
export default Save;

const Wrapper = styled.View`
  background-color: #8d72ff;
  margin-top: 7;
  align-items: center;
`;
const Button = styled.Text`
  font-size: 23;
  color: #fff;
  padding: 7px;
  text-align: center;
`;
