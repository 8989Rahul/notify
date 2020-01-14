import React from 'react';
import styled from 'styled-components/native';
import HomeScreenHeader from '../HomeScreen/HomeScreenHeader';
import EventDetail from './EventDetail';
import {ScrollView} from 'react-native';
import EventsList from './EventsList/EventsList';

const HomeScreen = props => {
  //   const name = props.navigation.getParam('name')
  //     ? props.navigation.getParam('name')
  //     : '';
  //   const phone = props.navigation.getParam('phone')
  //     ? props.navigation.getParam('phone')
  //     : '';
  return (
    <Wrapper>
      <HomeScreenHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <EventDetail />

          <BottomCenterViewContainer>
            <BottomCenterView />
          </BottomCenterViewContainer>
          <UpcomingEventsContainer>
            <UpcomingEvents>Upcoming Events</UpcomingEvents>
            <HorizontalRows>
              <HorizontalRowFirst />
              <HorizontalRowSecond />
            </HorizontalRows>
          </UpcomingEventsContainer>
          <EventsList />
          {/* <SendMessage
            navigation={props.navigation}
            name={name}
            phone={phone}
          /> */}
        </Container>
      </ScrollView>
    </Wrapper>
  );
};

export default HomeScreen;

const Wrapper = styled.View`
  flex: 1;
  background-color: #f5f6fb;
`;
const BottomCenterView = styled.View`
  background-color: #f5f6fb;
  height: 12;
  width: 90;
  border-top-left-radius: 7;
  border-top-right-radius: 7;
  position: absolute;
  top: -12;
`;
const BottomCenterViewContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  padding-horizontal: 10px;
`;
const UpcomingEventsContainer = styled.View`
  padding-horizontal: 10px;
  margin-top: 10;
  flex-direction: row;
`;
const UpcomingEvents = styled.Text`
  color: #898a8e;
  width: 130;
  font-weight: bold;
  font-size: 22;
`;
const HorizontalRows = styled.View`
  width: 150;
  margin-top: 25;
`;
const HorizontalRowFirst = styled.View`
  width: 110;
  height: 2;
  background-color: #f999b4;
  margin-left: 20;
  margin-bottom: 15;
`;
const HorizontalRowSecond = styled.View`
  width: 110;
  height: 2;
  background-color: #f999b4;
`;
