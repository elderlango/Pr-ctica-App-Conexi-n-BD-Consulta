import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 0, borderRadius: 10, padding: 10, backgroundColor: '#f3ad2e' }}>
      <Icon name="lock" size={20} color="white" />
      <TextInput style={{ marginLeft: 10, flex: 1 }} placeholder="Contraseña" secureTextEntry={!showPassword} />
      <TouchableOpacity onPress={toggleShowPassword}>
        <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default PasswordInput;
