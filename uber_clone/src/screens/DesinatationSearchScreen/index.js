import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

import {useNavigation} from '@react-navigation/native';


const homePlace = {
    description: 'Home',
    geometry:{location: {lat:48.8152937, lng:2.4597668}},
};

const workPlace = {
    description: 'Work',
    geometry:{location: {lat:48.8496818, lng:2.2940881}},
};
import styles from './styles';


const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();

    let API_KEY = "";
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const checkNavigation = () => {
        if(originPlace && destinationPlace){
            navigation.navigate(
                'SearchResults',
                {
                    originPlace,
                    destinationPlace,
                })
        }
    }

    useEffect( () => {
    checkNavigation();

    }, [originPlace, destinationPlace])


    return (
        <SafeAreaView>
            <View style={styles.container}>
            <GooglePlacesAutocomplete
                    placeholder='Where from ?'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details})
                       //console.log(data, details);
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel='Current Location'
                    predefinedPlaces={[homePlace,workPlace]}
                    styles={{
                        textInput: styles.textInput,
                        container:styles.autoCompleteContainer,
                        listView:styles.listView,
                        separator:styles.separator,
                    }}
                    fetchDetails
                    query={{
                        key: API_KEY,
                        language: 'en',
                    }}

                    renderRow={(data) => <PlaceRow data={data}/>}
                    renderDescription={(data) => data.description || data.vicinity}
                />
                

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details})
                       //console.log(data, details);
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container:{...styles.autoCompleteContainer,top:55},
                        separator:styles.separator,
                        
                    }}
                    fetchDetails
                    query={{
                        key: API_KEY,
                        language: 'en',
                    }}

                    renderRow={(data) => <PlaceRow data={data}/>}
                />
                <View style={styles.circle} />
                <View style={styles.line} />
                <View style={styles.square} />
                
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearchScreen;