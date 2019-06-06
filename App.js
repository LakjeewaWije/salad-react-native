import {createStackNavigator, createAppContainer} from 'react-navigation';

import SignUpScreen from './ui/signup-screen';
import LoginScreen from './ui/login-screen';
import MainScreen from './ui/main-screen';


const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  SingUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null,
    }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  }
});

export default  App = createAppContainer(MainNavigator);

// export default App;