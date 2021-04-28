import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const UberType = (props) => {
   
    const {type} = props;

    const getImage = () => {
        if(type.type === 'UberX'){
            return require('../../assets/images/UberX.jpeg')
        }
        if(type.type === 'Comfort'){
            return require('../../assets/images/Comfort.jpeg')
        }
        if(type.type === 'UberXL'){
            return require('../../assets/images/UberXL.jpeg')
        }
    }

    return (
        <View style={styles.container}>

            <Image
             style={styles.image}
             source={getImage()}
            />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type} &nbsp;
                    <Ionicons name={'person'} size={16} />
                    3
                </Text>
                <Text>
                    {type.dropoff} drop off
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'#42D742'} />
                <Text style={styles.price}>{type.price}</Text>
            </View>
        </View>
    );
};

export default UberType;