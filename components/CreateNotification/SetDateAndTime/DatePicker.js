import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import {View, TouchableOpacity} from 'react-native';

const DatePickerWrapper = styled.View`
  margin-top: 12;
  border-radius: 15;
  background-color: #ffffff;
`;
const SelectDateWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10;
  padding-left: 15;
  padding-right: 10;
`;

const DayText = styled.Text`
  font-size: 15;
  color: #98979c;
  font-style: italic;
`;
const TextWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding-horizontal: 10px;
  padding-top: 5px;
  padding-bottom: 10px;
`;
const DatePicker = () => {
  const [active, setActive] = React.useState(1);
  const [Date] = useState([
    {day: 'Sun', date: '1'},
    {day: 'Mon', date: '2'},
    {day: 'Tue', date: '3'},
    {day: 'Wed', date: '4'},
    {day: 'Thu', date: '5'},
    {day: 'Fri', date: '6'},
    {day: 'Sat', date: '7'},
  ]);

  return (
    <DatePickerWrapper>
      <TextWrapper>
        <DateAndTime>15 November 2018</DateAndTime>
        <TouchableOpacity>
          <Icon
            type="MaterialIcons"
            name="add-circle"
            size={43}
            color="#3bc48e"
          />
        </TouchableOpacity>
      </TextWrapper>
      <SelectDateWrapper>
        {Date.map((d, i) => {
          return (
            <View key={i}>
              <DayText>{d.day}</DayText>
              <DatesContainer
                active={d.date === active}
                onPress={() => setActive(d.date)}>
                <Dates active={d.date === active}>{d.date}</Dates>
              </DatesContainer>
            </View>
          );
        })}
      </SelectDateWrapper>
    </DatePickerWrapper>
  );
};

const DatesContainer = styled.TouchableOpacity`
  margin-top: 10;
  background-color: ${props => (props.active ? '#8d72ff' : '#f2f1f3')};
  border-bottom-left-radius: 20;
  border-top-right-radius: 20;
  border-bottom-right-radius: 20;
  border-top-left-radius: 20;
  align-items: center;
  justify-content: center;
  height: 33;
  width: 33;
`;

const Dates = styled.Text`
  font-size: 15;
  color: ${props => (props.active ? 'white' : 'black')};
`;

const DateAndTime = styled.Text`
  font-size: 23;
  color: black;
  margin-right: auto;
`;

export default DatePicker;
