import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding:10,
        height:'100%'
    },
    textInput:{
        padding:10,
        backgroundColor:'#eeeeee',
        marginVertical:5,
        marginLeft:20
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    separator:{
        backgroundColor:'#efefef',
        height:1
    },
    listView:{
        position:'absolute',
        top:105
    },
    autoCompleteContainer:{
        position:'absolute',
        top:0,
        left:10,
        right:10
    },
    iconContainer:{
        backgroundColor:'#a2a2a2',
        padding:5,
        borderRadius:50,
        marginRight:15
    },
    locationText:{

    },
    circle:{
        width:7,
        height:7,
        backgroundColor:'black',
        position:'absolute',
        borderRadius:50,
        top:21,
        left:15
    },
    line:{
        width:1.5,
        height:43,
        backgroundColor:'#919191',
        position:'absolute',
        top:30.5,
        left:17.5

    },
    square:{
        width:7,
        height:7,
        backgroundColor:'black',
        position:'absolute',
        top:76,
        left:15
    }
});

export default styles;