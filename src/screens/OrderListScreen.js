import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, ScrollView, SafeAreaView, View } from 'react-native';

import { OrderItem } from '../components/OrderItem';
import { OrderContext } from '../context/OrderContext';

import ordersList from '../constants/orders.json';
import { windowWidth } from '../utils/Dimensions';


export const OrderListScreen = ({ navigation, route }) => {
  const id = route.params.id - 1;
  const { orders } = useContext(OrderContext);

  const renderItem = ({ item }) => (
    <OrderItem
      item={item}
      navigate={(deliveries) =>
        navigation.navigate('Details', {deliveries})
      }
    />
  );

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>
        { id !== 0 &&
        <View style={styles.ordersCountContainer}>
          <Text style={styles.ordersCountDescription}>
            Мои заказы
          </Text>
          <Text style={styles.ordersCount}>
            {orders.length}
          </Text>
        </View>
        }
        { id === 0
          ? <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <Text>{JSON.stringify(ordersList)}</Text>
          </ScrollView>
          : <FlatList
            data={orders.filter( (order) => order.client_id === id)}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        }
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'flex-start',
  },
  container: {
    marginHorizontal: 0.05 * windowWidth,
  },
  ordersCountContainer: {
    flexDirection: 'row',
    marginBottom: 0.01 * windowWidth,
    marginTop: 0.03 * windowWidth,
  },
  ordersCount: {
    color: '#858585',
    fontSize: 0.05 * windowWidth,
    marginLeft: 0.02 * windowWidth,
  },
  ordersCountDescription: {
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold'

  }
});
