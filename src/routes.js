import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Chat from './containers/ChatContainer';
import Login from './containers/LoginContainer';

const MainNavigator = createStackNavigator({
    Chat: { screen: Chat }
});

const Routes = createAppContainer(MainNavigator);

export default Routes;
