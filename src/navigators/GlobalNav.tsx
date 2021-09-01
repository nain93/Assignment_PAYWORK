import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from '../screens/TodoList';

const Stack = createStackNavigator();

const GlobalNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ cardStyle: { backgroundColor: 'white' } }}>
        <Stack.Screen
          name="TodoList"
          options={{
            headerTitle: 'TODOLIST',
          }}
          component={TodoList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GlobalNav;
