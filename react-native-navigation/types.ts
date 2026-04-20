import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

/**
 * Root Stack Params
 */
export type RootStackParamList = {
  Home: undefined;

  Details: {
    itemId: number;
    message: string;
  };

  MoreDetails: {
    itemId: number;
    message: string;
  };
};

/**
 * Navigation Props
 */
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type MoreDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MoreDetails'
>;

/**
 * Route Props
 */
export type DetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'Details'
>;

export type MoreDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MoreDetails'
>;

/**
 * Screen Props
 */
export type DetailsProps = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

export type MoreDetailsProps = {
  navigation: MoreDetailsScreenNavigationProp;
  route: MoreDetailsScreenRouteProp;
};