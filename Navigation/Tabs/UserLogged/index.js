import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../Styles/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopNavigator from '../../Stacks/Shop'
import CartStack from '../../Stacks/Cart';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import OrdersStack from '../../Stacks/Orders'
import LocationStack from '../../Stacks/Locations'

const BottomTabs = createBottomTabNavigator()

const TabNavigatorLogged = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Entypo name="shop" size={24} color="black" />
                <Text>Shop</Text>
              </View>
            )
          }
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Feather name="shopping-cart" size={24} color="black" />
                <Text>Cart</Text>
              </View>
            )
          }
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Feather name="list" size={24} color="black" />
                <Text>Ordenes</Text>
              </View>
            )
          }
        }}
      />
      <BottomTabs.Screen
        name="LocationTab"
        component={LocationStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Entypo name="location" size={24} color="black" />
                <Text>Direcciones</Text>
              </View>
            )
          }
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabNavigatorLogged

const styles = StyleSheet.create({
  tabBar: {
    elevation: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 5,
    height: 68,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})