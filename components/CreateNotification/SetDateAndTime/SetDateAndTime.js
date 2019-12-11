import React from 'react';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import DatePicker from './DatePicker';

const Wrapper = styled.View`
  flex: 1;
  background-color: #f5f6fb;
  padding-top: 20;
  width: 100%;
  padding: 10px;
`;
// const EmptyView = styled.View`
//   background-color: #8d72ff;
//   width: 3px;
// `;
const TextWrapper = styled.View`
  background-color: #faf9fe;
  padding: 12px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-left-width: 3;
  border-color: #8d72ff;
`;
const Text = styled.Text`
  font-size: 18;
  color: #98979c;
  margin-right: auto;
`;

// const wrapper = styled(View).attrs(()=>({
//     background
// }))

const SetDateAndTime = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>Date and Time</Text>
        <Icon type="feather" name="bell" size={22} color="#98979c" />
      </TextWrapper>

      <DatePicker />
    </Wrapper>
  );
};

export default SetDateAndTime;
