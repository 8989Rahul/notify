import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const EventDetail = () => {
  return (
    <LinearGradient
      colors={['#f999b4', '#f5df2d']}
      start={{x: 0, y: 0}}
      end={{x: 0.9, y: 1}}
      style={styles.linearGradient}>
      <Wrapper>
        <Subject>Weekend Trip</Subject>
        <Time>At 11.15am {'  '}Today</Time>
        <Description>Brilliant weekend trip to Zales</Description>
        <DateAndDayWrapper>
          <Date>06/04/19</Date>
          <Day>Wed</Day>
        </DateAndDayWrapper>
      </Wrapper>
    </LinearGradient>
  );
};

export default EventDetail;

const Wrapper = styled.View`
  min-height: 50;
`;
const Subject = styled.Text`
  padding-left: 20;
  color: #fffeff;
  font-size: 35;
  font-weight: bold;
  padding-top: 15;
`;
const Time = styled.Text`
  margin-left: 20;
  color: #f7e6de;
  padding-top: 6;
  font-size: 15;
  font-style: italic;
  padding-left: 10;
`;
const Description = styled.Text`
  margin-left: 20;
  color: #fffeff;
  padding-top: 15;
  font-size: 20;
  padding-left: 10;
  font-weight: bold;
  padding-right: 20;
`;
const Date = styled.Text`
  color: #f7e6de;
  font-size: 15;
  font-style: italic;
`;
const Day = styled.Text`
  color: #fffeff;
  font-size: 15;
  font-style: italic;
  font-weight: bold;
`;
const DateAndDayWrapper = styled.View`
  padding-left: 10;
  padding-right: 10;
  padding-top: 20;
  flex-direction: row;
  justify-content: space-between;
`;
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
