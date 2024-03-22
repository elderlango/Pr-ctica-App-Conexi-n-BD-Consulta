import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import axios from 'axios';

const ChartPage = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.20.100.235:3000/datos');
        setDatos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const labels = datos.map((data) => data.label);
  const values = datos.map((data) => data.value);

  return (
    <View>
      <Text>INGRESOS</Text>
      <LineChart
        data={{
          labels: labels, 
          datasets: [
            {
              data: values          
            },
              
          ],
        }}

    
        width={Dimensions.get('window').width} // from react-native
        height={300}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 80,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default ChartPage;
