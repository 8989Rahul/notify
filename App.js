import React from 'react';
// import Login from './components/Login';
import styled from 'styled-components/native';
import CreateNotification from './components/CreateNotification/CreateNotification';

const App = () => {
  return (
    <Wrapper>
      {/* <Login /> */}
      <CreateNotification />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.View`
  flex: 1;
`;
