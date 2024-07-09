import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

const Name = () => {
  const [playerName, setPlayerName] = useState({
    player1: '',
    player2: '',
  });

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const onChangeTextHandler = (name: string, value: string) => {
    setPlayerName(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <View style={Style.Container}>
      <ImageBackground
        source={require('../assets/images1.jpeg')}
        style={Style.image}>
        <Text style={Style.text}>ENTER PLAYER NAME</Text>
        <TextInput
          placeholder=" Player 1"
          style={Style.name}
          maxLength={8}
          onChangeText={player1 => onChangeTextHandler('player1', player1)}
        />
        <TextInput
          placeholder=" Player 2"
          style={Style.name}
          maxLength={8}
          onChangeText={player2 => onChangeTextHandler('player2', player2)}
        />
        <TouchableOpacity
          style={Style.tile}
          onPress={() => {
            navigation.navigate('NewGame', {
              playerName1: playerName.player1,
              playerName2: playerName.player2,
            });
          }}>
          <Text style={{color: 'white', fontSize: 22}}> Start Game </Text>
        </TouchableOpacity>
        <Text>{playerName.player1}</Text>
      </ImageBackground>
    </View>
  );
};

export default Name;

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    height: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    width: '80%',
    height: 45,
    marginBottom: '6%',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'white',
    backgroundColor: 'white',
  },

  text: {
    fontSize: 26,
    color: 'white',
    marginBottom: '10%',
    borderColor: 'black',
    textShadowColor: 'white',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    justifyContent: 'center',
  },

  tile: {
    width: 260,
    height: 50,
    borderWidth: 1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bfff',
    borderColor: '#00bfff',
    textAlign: 'center',
  },

  image: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
