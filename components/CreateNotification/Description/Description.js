import React from 'react';
import styled from 'styled-components/native';
import {Input} from 'react-native-elements';

const DescriptionFiled = styled(Input).attrs(() => ({
  containerStyle: {
    paddingHorizontal: 0,
  },
  inputContainerStyle: {
    marginTop: 7,
    backgroundColor: '#ffffff',
    borderColor: 'transparent',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  inputStyle: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#626060',
  },
}))``;

const Description = props => {
  // const [Description, setDescription] = useState('');

  return (
    <Wrapper>
      <DescriptionFiled
        multiline={true}
        numberOfLines={4}
        placeholderTextColor="#cbcbcb"
        // onChangeText={text => setDescription({text})}
        // value={Description}
        placeholder={props.placeholder}
        textAlignVertical={'top'}
      />
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.View`
  padding-horizontal: 0px;
`;
