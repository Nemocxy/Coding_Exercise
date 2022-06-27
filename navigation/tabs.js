import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import DataScreen from '../screens/DataScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: { marginBottom: 10, marginTop: 10, borderTopWidth: 0 },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'HOME') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'MY WATCHLIST') {
                iconName = focused 
                ? 'planet' 
                : 'planet-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen name="MY WATCHLIST" component={DataScreen} options={{ tabBarBadge: 5 }} />
        </Tab.Navigator>
    );
}

export default Tabs;