import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ChatRoom from './views/ChatRoom';

const MainNavigator = createStackNavigator({
    // Login: { screen: HomeScreen },
    ChatRoom: { screen: ChatRoom }
});

const Routes = createAppContainer(MainNavigator);

export default Routes;
