import {createStackNavigator} from 'react-navigation-stack';
import CreateNotification from './CreateNotification/CreateNotification';
import AddRecipient from './CreateNotification/CreateNotificationHeader/SendMessage/AddRecipient';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Animated, Easing} from 'react-native';
const AppNavigator = createStackNavigator(
  {
    CreateNotification: {
      screen: CreateNotification,
    },
    AddRecipient: {screen: AddRecipient},
  },
  {
    initialRouteName: 'CreateNotification',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const {layout, position, scene} = sceneProps;
        const {index} = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return {opacity, transform: [{translateY}]};
      },
    }),
  },
);
export default createAppContainer(
  createSwitchNavigator({
    AppNavigator: AppNavigator,
  }),
);
