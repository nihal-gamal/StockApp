import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import styles from './Styles';
import { LineChart } from 'react-native-chart-kit';
import Chart from '../../Components/LineChart';

interface DetailsScreenProps {
  route: {
    params: {
      item: {
        symbol: string;
        name: string;
        currentPrice: number;
        percentageGain: number;
      };
    };
  };
  navigation: any;
}

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    color: (opacity: number) => string;
    strokeWidth?: number;
  }[];
}
const arrayData = [{title:"Close Price",price:"215.485.5477"},
              {title:" Price",price:"215.485.5477"},
              {title:"Last Trade Price",price:"215.485.5477"},
              {title:"Outstanding",price:"215.485.5477"}]


const DetailsScreen = ({ route, navigation }: DetailsScreenProps) => {
  const { item } = route.params;

  

  return (
    <SafeAreaView>
      <View style={styles.topView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Market')}
        >
          <Text>&lt;</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.stockSymbol}>{item.symbol}</Text>
          <Text style={styles.stockName}>{item.name}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.stockPrice}>${item.currentPrice}</Text>
        <Text style={item.percentageGain > 0 ? styles.blue : styles.red}>
          {item.percentageGain}%
        </Text>
      </View>
      
       
      {/* <Chart
        data={data}
        width={400}
        height={220}
        // chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      /> */}
      
     {arrayData.map(item => <View key={item.title} style={styles.containerBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>)}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add To Portfolio</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailsScreen;