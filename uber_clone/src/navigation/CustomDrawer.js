import React from 'react';
import {View,Text, Pressable, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'; 

const CustomDrawer = (props) => {
    return (
            <DrawerContentScrollView{...props}>
                <View style={styles.userContainer}>

                  <View style={styles.userInfo}>
                    <View style={styles.profilePicture}>
                        <Image style={styles.photo} source={require('../assets/images/photo.jpg')} />
                    </View>
                    <View>
                        <Text style={styles.userName}>Vlad Ghetina</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.rating}>5.00</Text>
                            <AntDesign name="star" size={12} color="grey" />
                        </View>
                    </View>
                  </View>

                  <View style={styles.container}>
                    <Pressable onPress={() => {console.warn('vlad1')}}>
                        <Text style={styles.driving}>Messages</Text>
                    </Pressable>
                  </View>

                    <Pressable onPress={() => {console.warn('vlad2')}}>
                        <Text style={styles.account}>Do more with your account</Text>
                    </Pressable>

                    <Pressable onPress={() => {console.warn('vlad3')}}>
                        <Text style={styles.driving}>Make money driving</Text>
                    </Pressable>

                </View>
                <DrawerItemList{...props} />
            </DrawerContentScrollView>
    );
};

export default CustomDrawer;