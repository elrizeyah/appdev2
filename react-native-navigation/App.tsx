import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';


function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
      <Text>Home Screen</Text>


      {/* Receiving data from Details */}
      <Text>
        {route.params?.fromDetails ? route.params.fromDetails : 'No data yet'}
      </Text>


      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>


    </View>
  );
}


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
      <Text>Details Screen</Text>


      {/* Passing params back to Home */}
      <Button
        onPress={() =>
          navigation.navigate('Home', {
            fromDetails: 'Hello from Details',
          })
        }
      >
        Send Data to Home
      </Button>


      {/* Normal back */}
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
       
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />


        <Stack.Screen
          name="Details"
          component={DetailsScreen}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
