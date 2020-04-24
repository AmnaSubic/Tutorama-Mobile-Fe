import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import Search from '../screens/search/Search';
import Classes from '../screens/classes/Classes';
import Profile from '../screens/profile/Profile';

const screens = {
    SearchScreen: {
        screen: Search

    },
    ClassesScreen: {
        screen: Classes
    },
    ProfileScreen: {
        screen: Profile
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);

