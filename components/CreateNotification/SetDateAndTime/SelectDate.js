// //This is an example code to get DatePicker//
// import React, {useState} from 'react';
// //import react in our code.
// import {View, StyleSheet} from 'react-native';
// //import all the components we are going to use.
// import DatePicker from 'react-native-datepicker';
// //import DatePicker from the package we installed

// const MyDatePicker = () => {
//   return (
//     <View style={styles.container}>
//       <DatePicker
//         style={{width: 200}}
//         date={date} //initial date from state
//         mode="date" //The enum of date, datetime and time
//         placeholder="select date"
//         format="DD-MM-YYYY"
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 4,
//             marginLeft: 0,
//           },
//           dateInput: {
//             marginLeft: 36,
//           },
//         }}
//         onDateChange={d => {
//           setDate(d);
//         }}
//       />
//     </View>
//   );
// };

// export default MyDatePicker;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 50,
//     padding: 16,
//   },
// });
