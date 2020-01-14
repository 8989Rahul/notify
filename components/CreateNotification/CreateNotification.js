import React from 'react';
import styled from 'styled-components/native';
import CreateNotificationHeader from './CreateNotificationHeader/CreateNotificationHeader';
import Description from './Description/Description';
import SetDateAndTime from './SetDateAndTime/SetDateAndTime';
import SendMessage from './CreateNotificationHeader/SendMessage/SendMessage';
import Save from './Save';
import {ScrollView} from 'react-native';

const CreateNotification = props => {
  const name = props.navigation.getParam('name')
    ? props.navigation.getParam('name')
    : '';
  const phone = props.navigation.getParam('phone')
    ? props.navigation.getParam('phone')
    : '';
  return (
    <Wrapper>
      <CreateNotificationHeader navigation={props.navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Description placeholder="Description" />
          <SetDateAndTime />
          <SendMessage
            navigation={props.navigation}
            name={name}
            phone={phone}
          />
        </Container>
      </ScrollView>
      <Save />
    </Wrapper>
  );
};

export default CreateNotification;

const Wrapper = styled.View`
  flex: 1;
  background-color: #f5f6fb;
`;

const Container = styled.View`
  padding-horizontal: 10px;
`;
