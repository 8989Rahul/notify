import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';

// const Icon = styled(View).attrs(() => ({
//   containerStyle: {
//     paddingTop: 10,
//   },
// }))``;

const CreateNotificationHeader = () => {
  return (
    <Wrapper>
      <TouchableOpacity>
        <Icon
          type="feather"
          name="chevron-left"
          containerStyle={{paddingTop: 2}}
          size={40}
          color="#FFF"
        />
      </TouchableOpacity>
      <Title>Create</Title>
      <TouchableOpacity>
        <Icon
          type="entypo"
          name="dots-three-vertical"
          containerStyle={{paddingTop: 7}}
          size={25}
          color="white"
        />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default CreateNotificationHeader;

const Wrapper = styled.View`
  background-color: #8d72ff;
  flex-direction: row;
  justify-content: space-between;
  height: 120;
  padding-top: 20;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 30;
`;
