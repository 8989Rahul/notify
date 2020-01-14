import React from 'react';
import {} from 'react-native';
import styled from 'styled-components/native';
import {Icon} from 'react-native-elements';

const Event = () => {
  return (
    <Wrapper>
      <SubjectContainer>
        <Subject>Weekend Trip</Subject>
        <IconWrapper>
          <Icon
            type="AntDesign"
            name="delete"
            size={27}
            color="#9786dc"
            containerStyle={{marginLeft: 65}}
          />
          <Icon type="Feather" name="mic-off" size={27} color="#9786dc" />
        </IconWrapper>
      </SubjectContainer>
    </Wrapper>
  );
};

export default Event;

const Wrapper = styled.View`
  background-color: #fff;
  border-top-left-radius: 7;
  border-top-right-radius: 7;
  border-bottom-left-radius: 7;
  border-bottom-right-radius: 7;
  padding: 20px;
`;
const SubjectContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const IconWrapper = styled.View``;

const Subject = styled.Text`
  font-size: 25;
  font-weight: bold;
  color: #9786dc;
`;
