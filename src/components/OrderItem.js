import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import moment from 'moment';


export const OrderItem = ({ item, navigate }) => {
  //const currentDate = moment().format("YYYY-MM-DD");
  moment.locale('ru', {
    weekdays : 'понедельник_вторник_среду_четверг_пятницу_субботу_воскреенье'
    .split('_'),
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate(item.deliveries)}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {item.deliveries.length} дней
        </Text>
        <View style={styles.dietTitleContainer}>
          <Text style={styles.dietTitle}>
            {item.packageName}
          </Text>
          <Text style={styles.dietTitleDescription}>
            {item.packageCalories}
          </Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionDateContainer}>
          <Text style={styles.descriptionDateMonth}>Окт</Text>
          <Text style={styles.descriptionDateDay}>28</Text>
        </View>
        <View style={styles.descriptionOrderContainer}>
          <Text style={styles.descriptionOrderDeliveryText}>Ближайшая доставка</Text>
          <View>
            <Text style={styles.descriptionOrderWeekDay}>
              в {moment(item.deliveries[0].date, 'YYYY-MM-DD').format('dddd')} -
            </Text>
            <Text style={styles.descriptionOrderTime}>
              {item.deliveries[0].interval}
            </Text>
            <Text numberOfLines={1} style={styles.descriptionOrderTitle}>
              {item.deliveries[0].address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 0.015 * windowWidth,
    width: 0.9 * windowWidth,
    marginVertical: 0.015 * windowWidth,
    padding: 0.035 * windowWidth,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  descriptionDateContainer: {
    backgroundColor: '#0064ad',
    alignItems: 'center',
    paddingHorizontal: 0.046 * windowWidth,
    paddingVertical: 0.082 * windowWidth,
    borderRadius: 0.012 * windowWidth,
    marginTop: 0.05 * windowWidth
  },
  descriptionDateMonth: {
    color: '#fff',
    fontSize: 0.033 * windowWidth,
  },
  descriptionDateDay: {
    color: '#fff',
    fontSize: 0.052 * windowWidth,
    fontWeight: 'bold',
    marginVertical: 0.003 * windowWidth
  },
  descriptionOrderContainer: {
    padding: 0.06 * windowWidth,
    justifyContent: 'flex-start',
  },
  descriptionOrderDeliveryText: {
    fontSize: 0.044 * windowWidth,
    fontWeight: 'bold',
  },
  descriptionOrderWeekDay: {
    fontSize: 0.044 * windowWidth,
    fontWeight: 'bold',
    color: '#0064ad'
  },
  descriptionOrderTime: {
    marginTop: 0.038 * windowWidth,
    marginBottom: 0.01 * windowWidth,
    fontSize: 0.033 * windowWidth
  },
  descriptionOrderTitle: {
    fontSize: 0.033 * windowWidth,
    color: '#858585',
  },
  title: {
    fontSize: 0.085 * windowWidth,
    fontWeight: 'bold'
  },
  dietTitleContainer: {
    marginRight: 0.07 * windowWidth
  },
  dietTitle: {
    color: '#858585',
    fontSize: 0.027 * windowWidth,
  },
  dietTitleDescription: {
    fontSize: 0.037 * windowWidth,
    fontWeight: 'bold'
  },
});
