import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserInput = () => {
  return (
    <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 0, borderRadius: 10, padding: 10, backgroundColor: '#f3ad2e' }}>
      <Icon name="user" size={20} color="white" />
      <TextInput style={{ marginLeft: 10, flex: 1 }} placeholder="Usuario" />
    </View>
  );
}

export default UserInput;
