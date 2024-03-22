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
    { label: 'Admin', value: 'Admin' },
    { label: 'Tiendas', value: 'Tiendas' },
  ];

  return (
     <View>
      <Text style={{ color: 'white' }}>Ventas</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      {selectedValue && <Text style={{ color: 'white' }}>Selected: {selectedValue}</Text>}
    </View>
  );
};

export default Dropdown;