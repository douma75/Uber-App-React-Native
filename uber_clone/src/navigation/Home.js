import React from 'react';
import{createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearchScreen from '../screens/DesinatationSearchScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';

const Stack = createStackNavigator();


const HomeNavigator = (props) => {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name={"Home"} component={HomeScreen} />
                <Stack.Screen name={"DestinationSearch"} component={DestinationSearchScreen} />
                <Stack.Screen name={"SearchResults"} component={SearchResultsScreen} />
            </Stack.Navigator>
    );
};

export default HomeNavigator;