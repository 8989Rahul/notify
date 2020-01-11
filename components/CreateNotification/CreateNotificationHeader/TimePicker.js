import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const TimePicker = () => {
  return (
    <DateWrapper>
      <Date>10:30 AM</Date>
      <TouchableOpacity>
        <Icon
          type="feather"
          name="chevron-left"
          containerStyle={{paddingRight: 2}}
          size={27}
          color="#858585"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          type="MaterialIcons"
          name="add-circle"
          size={43}
          color="#3bc48e"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          type="feather"
          name="chevron-right"
          containerStyle={{paddingLeft: 2}}
          size={27}
          color="#858585"
        />
      </TouchableOpacity>
    </DateWrapper>
  );
};

export default TimePicker;

const DateWrapper = styled.View`
  background-color: #fefefe;
  margin-top: 7;
  padding-horizontal: 10px;
  borderTopLeftRadius: 12;
  borderBottomLeftRadius: 12;
  borderTopRightRadius: 12
  borderBottomRightRadius: 12;
  flex-direction:row;
  align-items:center;
`;
const Date = styled.Text`
  font-size: 28;
  color: #858585;
  margin-right: auto;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
`;
