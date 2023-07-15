import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Styles';

interface StockCardProps {
  navigation: {
    navigate: (screen: string, params: object) => void;
  };
  item: {
    symbol: string;
    name: string;
    currentPrice: number;
    percentageGain: number;
  };
}

const StockCard = ({ navigation, item }: StockCardProps) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Portfolio', { item })}>
      <View style={styles.card}>
        <View>
          <Text style={styles.symbol}>{item.symbol}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View></View>
        <View>
          <Text style={styles.price}>${item.currentPrice}</Text>
          <Text style={item.percentageGain > 0 ? styles.blue : styles.red}>
            {item.percentageGain}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StockCard;