import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Apropos from '../screens/Apropos';
import Login from '../screens/Login';
import Register from '../screens/Register'
import Dashboard from '../screens/Dashboard'

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Apropos:{screen:Apropos},
    Login:{screen:Login},
    Register:{screen:Register},
    Dashboard:{screen:Dashboard},

},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);