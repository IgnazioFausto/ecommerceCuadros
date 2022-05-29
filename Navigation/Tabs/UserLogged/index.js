import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../Styles/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopNavigator from '../../Stacks/Shop'
import CartStack from '../../Stacks/Cart';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import OrdersStack from '../../Stacks/Orders'

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
                <MaterialCommunityIcons name="image-frame" size={24} color="black" />
                <Text>Cuadros</Text>
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
                <Text>Carrito</Text>
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
                <Text>Pedidos</Text>
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
    shadowColor: colors.shadowTab,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
    height: 60,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})