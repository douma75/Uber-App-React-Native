import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView , {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';

import carsData from '../../assets/data/cars';

const GOOGLE_MAPS_APIKEY = '';

const RouteMap = ({origin, destination}) => {

    const originLoc= {
        latitude:origin.details.geometry.location.lat,
        longitude:origin.details.geometry.location.lng
    };

    const destinationLoc = {
        latitude:destination.details.geometry.location.lat,
        longitude:destination.details.geometry.location.lng
    };


    return (
        <MapView
            style={{width:'100%', height:'100%'}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
            latitude: 28.450627,
            longitude: -16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
            }}
            >
            <MapViewDirections
                origin={originLoc}
                destination={destinationLoc}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />
            <Marker
                coordinate={origin}
                title={'Origin'}
            
            />
            <Marker
                coordinate={destination}
                title={'Destination'}
                pinColor={'green'}
            
            />

        </MapView>       
        
    );
};

export default RouteMap;