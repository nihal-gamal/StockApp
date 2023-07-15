import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import StockCard from '../../Components/Card';
import LineChart1 from '../../Components/LineChart';

interface Stock {
  name: string;
  symbol: string;
  graph: string;
  currentPrice: number;
  percentageGain: number;
  category: string;
}

const HomeScreen = () => {
  const Stocks: Stock[] = [
    {
      symbol: 'Djia',
      name: 'Due Jonus Industurial',
      graph: '',
      currentPrice: 252154.25,
      percentageGain: -0.38,
      category: 'mainMarket',
    },
    {
      symbol: 'Djia',
      name: 'Due Jonus Industurial',
      graph: '',
      currentPrice: 252154.25,
      percentageGain: -0.38,
      category: 'juniorMarket',
    },
    {
      symbol: 'NASDAQ',
      name: 'Due Jonus Industurial',
      graph: '',
      currentPrice: 252154.25,
      percentageGain: 4.22,
      category: 'juniorMarket',
    },
    {
      symbol: 'S&P 500',
      name: 'Due Jonus Industurial',
      graph: '',
      currentPrice: 252154.25,
      percentageGain: 13.49,
      category: 'juniorMarket',
    },
    {
      symbol: 'S&P 500',
      name: 'Due Jonus Industurial',
      graph: '',
      currentPrice: 252154.25,
      percentageGain: 13.49,
      category: 'fxRates',
    },
    {
      symbol: 'RUSS 2k',
      name: 'Due Jonus Industurial',
      graph: '',
      currentPrice: 252154.25,
      percentageGain: -1.01,
      category: 'juniorMarket',
    },
    {
      symbol: 'RUSS 2k',
      name: 'Due Jonus Industurial',
      graph: '',
      currentPrice: 252154.25,
      percentageGain: -1.01,
      category: 'foundation',
    },
    {
      symbol: 'NASDAQDjia',
      name: 'Due Jonus Industurial',
      graph: '',
      currentPrice: 252154.25,
      percentageGain: 2.64,
      category: 'juniorMarket',
    },
  ];

  const navigation = useNavigation();
  const [stocks, setStocks] = useState<Stock[]>(Stocks);
  const [selectedCategory, setSelectedCategory] = useState<string>('juniorMarket');
  const categories = ['mainMarket', 'juniorMarket', 'fxRates', 'foundation'];
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  const filteredStocks = stocks.filter((stock) => stock.category === selectedCategory);

  const handleSearch = (text: string) => {
    if (!text.length) {
      return setStocks(Stocks);
    }
    const filteredData = stocks.filter((stock) =>
      stock.symbol.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
    );
    setStocks(filteredData.length ? filteredData : Stocks);
  };

  return (
    <SafeAreaView>
      <View style={styles.topView}>
        <Text style={styles.header}>Markets</Text>
        <TextInput
          placeholder="search markets"
          placeholderTextColor="white"
          onChangeText={handleSearch}
          style={styles.input}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryBox}>
          {categories.map((category) => (
            <TouchableOpacity key={category} onPress={() => handleCategorySelect(category)} style={styles.link}>
              <Text style={{ color: selectedCategory === category ? 'white' : 'black' }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={filteredStocks}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => <StockCard item={item} navigation={navigation} />}
      />

    </SafeAreaView>
  );
};

export default HomeScreen;