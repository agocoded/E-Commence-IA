
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function cart() {
  return (

       <View style={styles.main} >

        
       </View>

  

  ); 
}

const styles = StyleSheet.create({

  na:{
    flex:1,
    marginLeft:10,
    marginTop:70,
  },
  
  nam:{
    fontSize:60,
    fontWeight:'bold',

  },

  kebab:{
    flex:1,
    alignItems: 'flex-end',
    marginTop: 12,
  },

  car:{
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius:15,
  },

  touches:{

    fontWeight: 'bold',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '55%',
    height: '25%',
    borderRadius: 30,

  }, 

  down:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: -19,
    marginBottom: 10,
  },

  texts:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0a013b',
   
  },

  main: {
    flex: 1,
    backgroundColor: '#fcaf01',
  },

});





