import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: 'Selecciona una opcion...',
    value: null,
  };

  const options = [
    { label: 'Abastecer', value: 'Admin' },
  ];

  return (
    <View>
      <Text style={{ color: 'white' }}>Productos</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      {selectedValue && <Text>Selected: {selectedValue}</Text>}
    </View>
  );
};

export default Dropdown;