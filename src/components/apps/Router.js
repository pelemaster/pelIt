import { createStackNavigator, createAppContainer } from 'react-navigation'
import { AppRoutes, DefaultRoute } from './routes'

const AppNavigator = createStackNavigator(
    AppRoutes, DefaultRoute
)

export default createAppContainer(AppNavigator)