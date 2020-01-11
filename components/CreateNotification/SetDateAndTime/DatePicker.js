import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const DatePickerWrapper = styled.View`
  margin-top: 7;
  border-radius: 15;
  background-color: #ffffff;
`;
const SelectDateWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10;
  padding-horizontal: 10;
`;

const DayText = styled.Text`
  font-size: 15;
  color: #98979c;
  font-style: italic;
  text-align: center;
`;
const TextWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding-horizontal: 10px;
  padding-top: 5px;
  padding-bottom: 10px;
`;
const DatePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState(1);
  const [show, toggleCalendar] = useState(false);
  const [selected, setSelected] = useState();

  const selectedDate = [
    {
      key: 1,
      day: moment(selected)
        .format('dddd')
        .toString()
        .slice(0, 3),
      date: moment(selected),
    },
    {
      key: 2,
      day: moment(selected)
        .add(1, 'days')
        .format('dddd')
        .toString()
        .slice(0, 3),
      date: moment(selected).add(1, 'days'),
    },
    {
      key: 3,
      day: moment(selected)
        .add(2, 'days')
        .format('dddd')
        .toString()
        .slice(0, 3),
      date: moment(selected).add(2, 'days'),
    },
    {
      key: 4,
      day: moment(selected)
        .add(3, 'days')
        .format('dddd')
        .toString()
        .slice(0, 3),
      date: moment(selected).add(3, 'days'),
    },
    {
      key: 5,
      day: moment(selected)
        .add(4, 'days')
        .format('dddd')
        .toString()
        .slice(0, 3),
      date: moment(selected).add(4, 'days'),
    },
    {
      key: 6,
      day: moment(selected)
        .add(5, 'days')
        .format('dddd')
        .toString()
        .slice(0, 3),
      date: moment(selected).add(5, 'days'),
    },
    {
      key: 7,
      day: moment(selected)
        .add(6, 'days')
        .format('dddd')
        .toString()
        .slice(0, 3),
      date: moment(selected).add(6, 'days'),
    },
  ];

  return (
    <>
      <DatePickerWrapper>
        <TextWrapper>
          <DateAndTime>{moment(date).format('LL')}</DateAndTime>
          <TouchableOpacity>
            <Icon
              onPress={() => toggleCalendar(true)}
              type="MaterialIcons"
              name="add-circle"
              size={43}
              color="#3bc48e"
            />
          </TouchableOpacity>
        </TextWrapper>

        <SelectDateWrapper>
          {selectedDate.map((d, i) => {
            return (
              <View key={i}>
                <DayText>{d.day}</DayText>
                <DatesContainer
                  active={d.key === active}
                  onPress={() => {
                    setActive(d.key);
                    setDate(new Date(d.date.toDate()));
                  }}>
                  <Dates active={d.key === active}>
                    {moment(d.date)
                      .format('L')
                      .toString()
                      .slice(3, 5)}
                  </Dates>
                </DatesContainer>
              </View>
            );
          })}
        </SelectDateWrapper>
      </DatePickerWrapper>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(e, d) => {
            toggleCalendar(false);
            setSelected(d);
            setDate(d);
            setActive(1);
          }}
        />
      )}
    </>
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

export default DatePickerComponent;
