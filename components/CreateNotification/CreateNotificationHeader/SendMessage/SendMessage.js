import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import Info from '../Info';
import {Input} from 'react-native-elements';
import {View} from 'react-native';
import TimePicker from '../TimePicker';
import Description from '../../Description/Description';

const InputFiled = styled(Input).attrs(() => ({
  containerStyle: {
    paddingHorizontal: 0,
  },
  inputContainerStyle: {
    backgroundColor: '#ffffff',
    borderColor: 'transparent',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: 7,
  },
  inputStyle: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#626060',
  },
}))``;

const SendMessage = props => {
  const [value, setValue] = useState('');
  const name = props.name ? props.name : '';
  return (
    <Wrapper>
      <Info
        info="Send Message"
        type="feather"
        name="bell"
        size={22}
        color="#98979c"
      />
      <View>
        <InputFiled
          placeholderTextColor="#cbcbcb"
          placeholder="Add Recipient"
          onChangeText={val => setValue(val)}
          editable={name ? false : true}
          value={name ? name : value}
          keyboardType="numeric"
          rightIcon={
            <Icon
              type="entypo"
              name="user"
              size={21}
              onPress={() => props.navigation.navigate('AddRecipient')}
              color="#98979c"
              containerStyle={{
                backgroundColor: '#fff',
                paddingRight: 10,
              }}
            />
          }
        />
      </View>

      <Description placeholder="Enter Message" />
      <View style={{marginTop: 7}}>
        <Info
          info="Message Timing"
          type="feather"
          name="bell"
          size={22}
          color="#98979c"
        />
      </View>
      <TimePicker />
    </Wrapper>
  );
};

export default SendMessage;

const Wrapper = styled.View`
  background-color: #f5f6fb;
  margin-top: 7;
`;
