import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import Contacts from 'react-native-contacts';
import {Input} from 'react-native-elements';

const Item = ({phone, title, props}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('CreateNotification', {
          name: title,
          phone: phone,
        })
      }
      style={[styles.item]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const AddRecipient = props => {
  const [data, setData] = useState([]);
  //   console.log(data);
  const [text, setText] = useState('');
  const [SearchedData, setSeachedData] = useState('');

  useEffect(() => {
    if (data.length && text) {
      const newData = data.filter(d => {
        if (d.name.includes(text)) {
          return d;
        }
      });
      setSeachedData(newData);
    }
  }, [text, data]);
  //   console.log('newData=>', SearchedData);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Contacts.getAll((err, contacts) => {
        if (err) {
          throw err;
        }
        // contacts returned
        // this.setState({contacts});
      });
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        Contacts.getAll((err, contacts) => {
          if (err === 'denied') {
            // error
          } else {
            // contacts returned in Array
            let C = contacts.sort(function(a, b) {
              if (a.displayName < b.displayName) {
                return -1;
              }
              if (a.displayName > b.displayName) {
                return 1;
              }
              return 0;
            });
            const all = [];
            C.map((d, i) => {
              all.push({
                index: i,
                name: d.displayName,
                phone:
                  d.phoneNumbers.length > 0 && d.phoneNumbers[0].number
                    ? d.phoneNumbers[0].number
                    : '',
              });
            });
            setData(all);
          }
        });
      });
    }
  }, []);
  const emptyData = () => {
    setText('');
    setSeachedData([]);
  };
  return (
    <View style={{backgroundColor: '#f5f6fb', flex: 1}}>
      {data.length > 0 ? (
        <>
          <Wrapper>
            <TouchableOpacity>
              <Icon
                onPress={() => props.navigation.navigate('CreateNotification')}
                type="feather"
                name="chevron-left"
                containerStyle={{paddingTop: 8}}
                size={35}
                color="#FFF"
              />
            </TouchableOpacity>
            <Title>All Contacts</Title>
          </Wrapper>
          <InputFiled
            placeholderTextColor="#cbcbcb"
            placeholder="Search"
            onChangeText={value =>
              value !== '' ? setText(value) : emptyData()
            }
          />
          <SafeAreaView style={styles.container}>
            <FlatList
              data={SearchedData.length > 0 ? SearchedData : data}
              renderItem={({item, index}) => (
                <Item
                  key={index}
                  phone={item.phone}
                  title={item.name}
                  props={props}
                />
              )}
              initialNumToRender={20}
              keyExtractor={item => item.index}
            />
          </SafeAreaView>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default AddRecipient;

const Wrapper = styled.View`
  background-color: #8d72ff;
  flex-direction: row;
  height: 110;
  padding-top: 15;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 23;
  margin-left: 20;
  margin-top: 10;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#efefef',
    padding: 7,
    marginVertical: 3,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 20,
    color: '#605d5d',
  },
});
