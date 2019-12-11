import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './components/Login';
import SetDateAndTime from './components/CreateNotification/SetDateAndTime/SetDateAndTime';

const App = () => {
  return (
    <View style={styles.app}>
      {/* <Login /> */}
      <SetDateAndTime />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
