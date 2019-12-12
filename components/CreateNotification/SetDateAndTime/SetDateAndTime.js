import React from 'react';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import DatePicker from './DatePicker';
import {TouchableOpacity} from 'react-native';

const Wrapper = styled.View`
  background-color: #f5f6fb;
  padding-top: 10;
  width: 100%;
  padding-horizontal: 10px;
`;

const TextWrapper = styled.View`
  background-color: #f1f1f3;
  padding: 12px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-left-width: 3;
  border-color: #8d72ff;
`;
const Text = styled.Text`
  font-size: 16
  color: #86858a;
  margin-right: auto;
  font-style:italic
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
      <DateWrapper>
        <Date>10:30 AM</Date>
        <TouchableOpacity>
          <Icon
            type="feather"
            name="chevron-left"
            containerStyle={{paddingRight: 2}}
            size={35}
            color="#858585"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            type="MaterialIcons"
            name="add-circle"
            size={43}
            color="#3bc48e"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            type="feather"
            name="chevron-right"
            containerStyle={{paddingLeft: 2}}
            size={35}
            color="#858585"
          />
        </TouchableOpacity>
      </DateWrapper>
      <SendMessage>
        <TextWrapper>
          <Text>Send Message</Text>
          <Icon type="feather" name="bell" size={22} color="#98979c" />
        </TextWrapper>
      </SendMessage>
    </Wrapper>
  );
};

export default SetDateAndTime;

const DateWrapper = styled.View`
  background-color: #fefefe;
  margin-top: 12;
  width: 100%;
  padding-horizontal: 10px;
  borderTopLeftRadius: 12;
  borderBottomLeftRadius: 12;
  borderTopRightRadius: 12
  borderBottomRightRadius: 12;
  flex-direction:row;
  align-items:center;
`;
const Date = styled.Text`
  font-size: 28;
  color: #858585;
  margin-right: auto;
  font-weight: bold;
  padding: 10px;
`;

const SendMessage = styled.View`
  margin-top: 12px;
  width: 100%;
`;
