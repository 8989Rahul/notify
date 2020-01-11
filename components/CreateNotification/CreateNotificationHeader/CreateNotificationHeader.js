import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import {Input} from 'react-native-elements';

const CreateNotificationHeader = () => {
  return (
    <View>
      <Wrapper>
        <TouchableOpacity>
          <Icon
            type="feather"
            name="chevron-left"
            containerStyle={{paddingTop: 8}}
            size={35}
            color="#FFF"
          />
        </TouchableOpacity>
        <Title>Create</Title>
        <TouchableOpacity>
          <Icon
            type="entypo"
            name="dots-three-vertical"
            containerStyle={{
              paddingTop: 13,
              paddingLeft: 3,
              paddingRight: 3,
              marginRight: 5,
            }}
            size={21}
            color="white"
          />
        </TouchableOpacity>
      </Wrapper>
      <InputFiled placeholderTextColor="#cbcbcb" placeholder="Subject" />
    </View>
  );
};

export default CreateNotificationHeader;

const Wrapper = styled.View`
  background-color: #8d72ff;
  flex-direction: row;
  justify-content: space-between;
  height: 110;
  padding-top: 15;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 33;
`;

const InputFiled = styled(Input).attrs(() => ({
  containerStyle: {
    paddingHorizontal: 10,
  },
  inputContainerStyle: {
    backgroundColor: '#ffffff',
    borderColor: 'transparent',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    height: 50,
    marginTop: -25,
    width: '100%',
  },
  inputStyle: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#626060',
  },
}))``;
