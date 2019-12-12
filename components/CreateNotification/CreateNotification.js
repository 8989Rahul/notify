import React from 'react';
import styled from 'styled-components/native';
import CreateNotificationHeader from './CreateNotificationHeader/CreateNotificationHeader';
import Subject from './Subject/Subject';
import SetDateAndTime from './SetDateAndTime/SetDateAndTime';

const CreateNotification = () => {
  return (
    <Wrapper>
      <CreateNotificationHeader />
      <Container>
        <Subject />
        <SetDateAndTime />
      </Container>
    </Wrapper>
  );
};

export default CreateNotification;

const Wrapper = styled.View`
  background-color: #f5f6fb;
`;

const Container = styled.View`
  padding-horizontal: 15px;
`;
