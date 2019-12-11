import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import {View, StyleSheet} from 'react-native';

const DatePickerWrapper = styled.View`
  margin-top: 12;
  border-radius: 15;
  background-color: #ffffff;
`;
const SelectDateWrapper = styled.View`
  padding-top: 10;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10;
  padding-left: 15;
  padding-right: 10;
`;
const Text = styled.Text`
  font-size: 25;
  color: black;
`;
const DayText = styled.Text`
  font-size: 17;
  color: #98979c;
  font-style: italic;
`;
const TextWrapper = styled.View`
  flex-direction: row;
  padding: 10px;
`;
const DatePicker = () => {
  const [active, setActive] = React.useState(1);
  const [Date, setdate] = useState([
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
        <Text style={{marginRight: 'auto'}}>15 November 2018</Text>
        <Icon
          type="MaterialIcons"
          name="add-circle"
          size={45}
          color="#3bc48e"
        />
      </TextWrapper>
      <SelectDateWrapper>
        {Date.map((d, i) => {
          return (
            <View>
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
  background-color: ${props => (props.active ? '#ebe761' : '#fbfbfb')};
  border-bottom-left-radius: 20;
  border-top-right-radius: 20;
  border-bottom-right-radius: 20;
  border-top-left-radius: 20;
  align-items: center;
  justify-content: center;
  height: 40;
  width: 40;
`;

const Dates = styled.Text`
  font-size: 16;
  color: ${props => (props.active ? 'white' : 'black')};
`;

export default DatePicker;
