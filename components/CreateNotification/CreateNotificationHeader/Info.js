import React from 'react';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';

const Info = props => {
  return (
    <TextWrapper>
      <Text>{props.info}</Text>
      <Icon
        type={props.type}
        name={props.name}
        size={props.size}
        color={props.color}
      />
    </TextWrapper>
  );
};

export default Info;

const TextWrapper = styled.View`
  background-color: #f1f1f3;
  padding: 10px;
  flex-direction: row;
  border-left-width: 3;
  border-color: #8d72ff;
`;
const Text = styled.Text`
  font-size: 16
  color: #86858a;
  margin-right: auto;
  font-style:italic
`;
