import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen } from './screens/LoginScreen';
import { RegistrationScreen } from './screens/RegistrationScreen';
import { HomeScreen } from './screens/HomeScreen';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegistrationScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(RootStack);
