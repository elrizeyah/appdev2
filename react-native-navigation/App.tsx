import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

import type {
  RootStackParamList,
  DetailsProps,
  MoreDetailsProps,
} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * HOME SCREEN
 */
function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 1,
            message: 'Hello from Home',
          })
        }
      >
        Go to Details
      </Button>
    </View>
  );
}

/**
 * DETAILS SCREEN
 */
function DetailsScreen({ route, navigation }: DetailsProps) {
  const { itemId, message } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Message: {message}</Text>

      <Button
        onPress={() =>
          navigation.navigate('MoreDetails', {
            itemId,
            message,
          })
        }
      >
        Go to More Details
      </Button>

      <Button onPress={() => navigation.goBack()}>
        Go Back
      </Button>
    </View>
  );
}

/**
 * MORE DETAILS SCREEN
 */
function MoreDetailsScreen({ route, navigation }: MoreDetailsProps) {
  const { itemId, message } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>More Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Message: {message}</Text>

      <Button onPress={() => navigation.popToTop()}>
        Back to Home
      </Button>
    </View>
  );
}

/**
 * APP
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="MoreDetails" component={MoreDetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}