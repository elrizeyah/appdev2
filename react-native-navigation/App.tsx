import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';


function HomeScreen({ navigation }) {
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


function DetailsScreen({ route, navigation }) {
  const { itemId, message } = route.params || {};


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>


      <Text>Item ID: {itemId}</Text>
      <Text>Message: {message}</Text>


      <Button onPress={() => navigation.goBack()}>
        Go Back
      </Button>
    </View>
  );
}


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
