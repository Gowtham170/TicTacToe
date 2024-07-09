import React, {useEffect, useState} from 'react';
import {View,TouchableOpacity,StyleSheet,Text,Alert,ImageBackground} from 'react-native';


const Game = () => {

    const [value, setValue] = useState({
        player1Score: 0,
        player2Score: 0,
        currentPlayer: 1,
        gameState: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    });

    useEffect(() => {
        initialize();
    }, [value.gameState, value.currentPlayer]);
     
    const initialize = () => {
        value.gameState = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
        value.currentPlayer = 1
    }

    const renderIcon = (row: number, col: number) => {
        let currentVal = value.gameState[row][col];
        switch(currentVal) {
            case 1: return (<Text style = {Styles.tileX} >X</Text>);
            case -1 : return (<Text style = {Styles.tile0}>O</Text>);
            default: return <View/>
        }
    }

    // renderIcon = (row,col) => {
    //      var value = this.state.gameState[row][col];
    //      switch (value) {
    //       case 1 : return (<Text style = {Styles.tileX}>X</Text>);
    //       case -1 : return (<Text style = {Styles.tile0}>O</Text>);
    //       default : return <View/>;
    //      }
    // };
     
    TilePress = (row,col) => {

         var value = this.state.gameState[row][col];
         if (value !== 0) {
             return;
         }

         var currentPlayer = this.state.currentPlayer;

         var arr = this.state.gameState.slice ();
         arr[row][col] = currentPlayer;
         this.setState ({gameState : arr})
         
         var nextPlayer = (currentPlayer == 1) ? -1 : 1
         this.setState ({currentPlayer : nextPlayer})

         var Winner = this.getWinner();

         const  { player1, player2 } = this.props.route.params;
         const  {playerName2} = this.props.route.params;  

         if (Winner == 1) {
             this.setState ({player1Score : this.state.player1Score + 1});
             Alert.alert( JSON.stringify(playerName1) +' '+ 'is a Winner');
             this.initialize ();
         }
         else if (Winner == -1) {
             this.setState ({player2Score : this.state.player2Score + 1})
             Alert.alert( JSON.stringify(playerName2) +' '+ 'is a Winner');
             this.initialize ();
         }
    };

     getWinner = () => {
         const tile = 3;
         var arr = this.state.gameState;
         var sum;
    
         // Check row

         for (var i = 0;i < tile;i++) {
              sum = arr[i][0] + arr[i][1] + arr[i][2];
              if (sum == 3) {
                  return 1;
              }
              else if (sum == -3) {
                  return -1;
              }
         }
 
         // Check Column

         for (var i = 0;i < tile;i++) {
             sum = arr [0][i] + arr[1][i] + arr[2][i];
             if (sum == 3) {
                 return 1;
             } 
             else if (sum == -3) {
                 return -1;
             }
         }

         //Check Diagonal 

         sum = arr [0][0] + arr[1][1] + arr[2][2];
         if (sum == 3) {
             return 1;
         } 
         else if (sum == -3) {
             return -1;
         }

         sum = arr [0][2] + arr[1][1] + arr[2][0];
         if (sum == 3) {
             return 1;
         } 
         else if (sum == -3) {
             return -1;
         }

         return 0;
     };

           const  {playerName1} = this.props.route.params;
           const  {playerName2} = this.props.route.params;  
     return (
        <View style = {Styles.Container}>
            <ImageBackground
                 source = {require('../assets/images1.jpeg')}
                 style = {Styles.imageContainer}
                 >

                 <View style = {{flexDirection : 'row',marginBottom : '18%'}}>
                     <View >
                          <Text style = {[Styles.text,{color : '#00ffff'}]}>player X Score : {this.state.player1Score}</Text>
                          <Text style = {[Styles.text,{color : '#66ff66'}]}>player O Score : {this.state.player2Score} </Text>
                     </View>
                 </View>
                 
               <View style = {{flexDirection : 'row'}}>
                  <TouchableOpacity 
                        onPress = {() => {this.TilePress(0,0)}}
                        style = {[Styles.tile,{borderLeftWidth : 0,borderTopWidth : 0}]}>
                        {renderIcon(0,0)}
                  </TouchableOpacity>
                  <TouchableOpacity 
                        onPress = {() => {this.TilePress(0,1)}}
                        style = {[Styles.tile,{borderTopWidth : 0}]}>
                        {renderIcon(0,1)}
                  </TouchableOpacity>
                  <TouchableOpacity 
                        onPress = {() => {this.TilePress(0,2)}}
                        style = {[Styles.tile,{borderRightWidth : 0,borderTopWidth : 0}]}>
                        {renderIcon(0,2)}
                  </TouchableOpacity>
               </View>
               <View style = {{flexDirection : 'row'}}>
                    <TouchableOpacity 
                          onPress = {() => {this.TilePress(1,0)}}
                          style = {[Styles.tile,{borderLeftWidth : 0}]}>
                          {renderIcon(1,0)}
                    </TouchableOpacity>
                    <TouchableOpacity 
                          onPress = {() => {this.TilePress(1,1)}}
                          style = {Styles.tile}>
                          {renderIcon(1,1)}
                    </TouchableOpacity>
                    <TouchableOpacity 
                          onPress = {() => {this.TilePress(1,2)}}
                          style = {[Styles.tile,{borderRightWidth : 0}]}>
                          {renderIcon(1,2)}
                    </TouchableOpacity>
               </View>
               <View style = {{flexDirection : 'row'}}>
                    <TouchableOpacity 
                          onPress = {() => {this.TilePress(2,0)}}
                          style = {[Styles.tile,{borderLeftWidth : 0,borderBottomWidth : 0}]}>
                          {renderIcon(2,0)}
                    </TouchableOpacity>
                    <TouchableOpacity 
                          onPress = {() => {this.TilePress(2,1)}}
                          style = {[Styles.tile,{borderBottomWidth : 0}]}>
                          {renderIcon(2,1)}
                    </TouchableOpacity>
                    <TouchableOpacity 
                          onPress = {() => {this.TilePress(2,2)}}
                          style = {[Styles.tile,{borderRightWidth : 0,borderBottomWidth : 0}]}>
                          {renderIcon(2,2)}
                    </TouchableOpacity>
               </View>
               <View  style = {{flexDirection : 'row',marginTop : '18%'}}>
                   <TouchableOpacity 
                        style = {Styles.tile2}
                        onPress = {() => initialize ()}
                        >
                          <Text style = {{color : 'white',fontSize : 28}}> Restart </Text>
                   </TouchableOpacity>
                   <TouchableOpacity 
                        style = {Styles.tile2}
                        onPress = {() => handleClick ()}
                        >
                           <Text style = {{color : 'white',fontSize : 28}}> ExitGame </Text>
                    </TouchableOpacity>
               </View>
             </ImageBackground>
            </View>
        );
}
export default Game;


const Styles = StyleSheet.create ({
    Container : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
    },
    tile : {
        width : 120,
        height : 120,
        borderColor : 'white',
        borderWidth : 4,
    },

    tileX : {
        width : 120,
        height : 120,
        color : '#00ffff',
        fontSize : 70,
        textAlign : 'center',
        alignItems : 'center',
        justifyContent : 'center',
        textShadowColor:'white',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    },
    tile0 : {
        width : 120,
        height : 120,
        color :'#66ff66',
        fontSize : 80,
        textAlign : 'center',
        alignItems : 'center',
        justifyContent : 'center',
        textShadowColor:'white',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    },
    imageContainer : {
        height : '100%',
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center' ,
        backgroundColor : 'black'
    },

    text : {
        color : 'white',
        fontSize : 25,
        alignItems : 'center',
        // textShadowColor:'white',
        // textShadowOffset:{width: 5, height: 5},
        // textShadowRadius : 8,
    },

    tile2 : {
        width : 150,
        height : 40,
        alignItems : "center",
        justifyContent : "center",
        alignSelf : "center",
        alignContent : "center",
        textAlign : "center"
      },

})