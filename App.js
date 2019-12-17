import React from 'react';
// import Login from './components/Login';
import styled from 'styled-components/native';
// import CreateNotification from './components/CreateNotification/CreateNotification';
import AppNavigator from './components/AppNavigator';

const App = () => {
  return (
    <Wrapper>
      {/* <Login /> */}
      <AppNavigator />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.View`
  flex: 1;
`;
