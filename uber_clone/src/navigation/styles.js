import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    userContainer:{
        backgroundColor:'black',
        padding:15
    },
    driving:{
        color:'white',
        paddingVertical:5

    },
    account:{
        color:'#dddddd',
        paddingVertical:5
    },
    container:{
        borderTopWidth:1,
        borderBottomWidth:1,
        borderBottomColor:'#919191',
        borderTopWidth:1,
        borderTopColor:'#919191',
        paddingVertical:5,
        marginVertical:10
    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center',
    },
    profilePicture:{
    },
    photo:{
        width:50,
        height:50,
        borderRadius:25,
        resizeMode:'contain',
        marginRight:10
    },
    userName:{
        color:'white'
    },
    rating:{
        color:'grey',
        marginRight:5,
        fontWeight:'500'
    }
});

export default styles;