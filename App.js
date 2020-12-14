import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FeedListScreen from './src/Screen/FeedListScreen';
import FeedDetailScreen from './src/Screen/FeedDetailScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FeedViewScreen" component={FeedListScreen} />
        <Stack.Screen
          name="FeedDetailScreen"
          options={{headerBackTitle: 'Back'}}
          component={FeedDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
