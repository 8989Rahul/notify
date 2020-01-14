import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import {Input} from 'react-native-elements';

const HomeScreenHeader = () => {
  return (
    <View>
      <Wrapper>
        {/* <TouchableOpacity>
          <Icon
            type="feather"
            name="chevron-left"
            containerStyle={{paddingTop: 8}}
            size={35}
            color="#FFF"
          />
        </TouchableOpacity> */}
        <Title>Notify</Title>
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
      <InputFiled
        placeholderTextColor="#cbcbcb"
        placeholder="Search"
        rightIcon={
          <Icon
            type="Feather"
            name="search"
            size={27}
            color="#cbcbcb"
            containerStyle={{marginRight: 12, marginLeft: 5}}
          />
        }
      />
    </View>
  );
};

export default HomeScreenHeader;

const Wrapper = styled.View`
  background-color: #8d72ff;
  flex-direction: row;
  justify-content: flex-end;
  height: 110;
  padding-top: 15;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 33;
  text-align: center;
  margin-right: 29%;
`;

const InputFiled = styled(Input).attrs(() => ({
  containerStyle: {
    paddingHorizontal: 10,
  },
  inputContainerStyle: {
    backgroundColor: '#ffffff',
    borderColor: 'transparent',
    borderTopLeftRadius: 21,
    borderBottomLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomRightRadius: 21,
    height: 50,
    marginTop: -25,
    width: '100%',
  },
  inputStyle: {
    fontSize: 16,
    paddingHorizontal: 15,
    color: '#626060',
  },
}))``;
