import  React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native';
import image1 from '../assets/image5.png'; 
import image3 from '../assets/images1.jpeg';

export default class Splash extends React.Component {
      
    componentDidMount () {
        setTimeout ( () => {
             this.props.navigation.navigate('Home');
        },time);
    }


render ()   {
    return (
        <ImageBackground
             source = {image3}
             style = {{height : '100%',width : '100%',justifyContent : 'center',alignItems : 'center' }}
            >
            <View style = {Style.Container}>
                <Image
                   source = {image1}
                   style = {Style.image}
                />
                <Text style = {Style.text}>
                    Tic-Tac-Toe
                </Text>
            </View>
        </ImageBackground>
    )
   }
}

 const time = 1300;

 const Style = StyleSheet.create ({
     
    Container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },

    text : {
        color : 'white',
        fontSize : 40,
        marginTop : 20,
        marginBottom : '5%',
        alignItems : 'center',
        textShadowColor : 'white',
        textShadowOffset : {width: 5, height: 5},
        textShadowRadius : 12,
    } ,

    image : {
       height : 200,
       width : 200,
       borderWidth : 2,
       marginBottom : '6%',
    }
 })