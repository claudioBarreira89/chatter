import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Chat from './containers/ChatContainer';

const MainNavigator = createStackNavigator({
    // Login: { screen: HomeScreen },
    Chat: { screen: Chat }
});

const Routes = createAppContainer(MainNavigator);

export default Routes;
