import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import FormScreen from '../screens/FormScreen';
const screens = {
  Home: {
    screen: ListScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
  Form: {
    screen: FormScreen,
  },
};

const ListStack = createStackNavigator(screens);

export default createAppContainer(ListStack);
