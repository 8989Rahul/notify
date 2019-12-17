import {createStackNavigator} from 'react-navigation';
import CreateNotification from './CreateNotification/CreateNotification';
import AddRecipient from './CreateNotification/CreateNotificationHeader/SendMessage/AddRecipient';

const AppNavigator = createStackNavigator({
  CreateNotification: {screen: CreateNotification},
  AddRecipient: {screen: AddRecipient},
});

export default AppNavigator;
