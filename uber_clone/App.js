/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import HomeMap from './src/components/HomeMap';
import DestinationSearchScreen from './src/screens/DesinatationSearchScreen';
import SearchResultsScreen from './src/screens/SearchResultsScreen';
import GeoLocation from '@react-native-community/geolocation';
import Router from './src/navigation/Root';

navigator.geolocation = require('@react-native-community/geolocation');


const App: () => Node = () => {

  useEffect( () => {
    GeoLocation.requestAuthorization();
  }, [])
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <Router/>
    </>
  );
};


export default App;
