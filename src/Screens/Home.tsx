import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import RNExitApp from 'react-native-exit-app';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleClick = () => {
    RNExitApp.exitApp();
  };

  return (
    <View style={Style.container}>
      <ImageBackground
        //source={require('../assets/images1.jpeg')}
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../assets/jpg/image6.jpg')} style={Style.image} />
        <View style={Style.menu}>
          <TouchableOpacity
            style={Style.tile}
            onPress={() => navigation.navigate('Name')}>
            <Text style={{color: '#F7FAFB', fontSize: 27}}> NewGame </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Style.tile, {marginTop: '3%'}]}
            onPress={() => handleClick()}>
            <Text style={{color: '#F7FAFB' , fontSize: 27}}> ExitGame </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#9F73D0'
  },

  menu: {
    top: '6%',
  },

  image: {
    height: 250,
    width: 165,
    marginHorizontal: 20,
    marginBottom: 50,
    borderWidth: 3,
    borderColor: 'black',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15,
  },
  tile: {
    width: 280,
    height: 50,
    borderWidth: 1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#85C1E9',
    borderColor: '#85C1E9',
    textAlign: 'center',
  },
});
