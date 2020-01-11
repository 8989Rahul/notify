import React from 'react';
import styled from 'styled-components/native';
import DatePicker from './DatePicker';
import Info from '../CreateNotificationHeader/Info';
import TimePicker from '../CreateNotificationHeader/TimePicker';

const Wrapper = styled.View`
  background-color: #f5f6fb;
  padding-top: 7;
  width: 100%;
`;

// const wrapper = styled(View).attrs(()=>({
//     background
// }))

const SetDateAndTime = () => {
  return (
    <Wrapper>
      <Info
        info="Date and Time"
        type="feather"
        name="bell"
        size={22}
        color="#98979c"
      />

      <DatePicker />
      <TimePicker />
    </Wrapper>
  );
};

export default SetDateAndTime;
