import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

import UberType from '../UberType';
import typesData from '../../assets/data/types';

const UberTypes = (props) => {

    const confirm = () =>{
        console.warn('lool')
    }
    return (
        <View>
            {typesData.map(type => <UberType type={type} key={type.id} />)}
            
            <Pressable onPress={confirm} style={styles.button}>
                <Text style={styles.buttonText}>
                    Confirm uber
                </Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;