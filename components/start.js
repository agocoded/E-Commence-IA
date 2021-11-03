
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function start({navigation}) {
  return (

       <View style={styles.main} >
       
        <View style={styles.kebab}>
        <Image source={require('../assets/main.png')}  style={{width:200,
          height:200  ,  borderRadius:10,}}/>
        </View>

        <View style={styles.na}>
          <Text style={styles.nam}> Welcome </Text>
          <Text style={styles.nam}> to </Text>
          <Text style={styles.nam}> W<Text style={{color:'#fff'}}>a</Text>l<Text style={{color:'#fff'}}>a-</Text>Kp<Text style={{color:'#fff'}}>a</Text>kp<Text style={{color:'#fff'}}>a</Text> </Text>
        </View>
          
    

        <View style={styles.down}>
        <TouchableOpacity style={styles.touches}>
          <Text 
          style={styles.texts} 
          onPress={() => navigation.push("Collections", { name: "Collections" })
        }> Start <AntDesign name="arrowright" size={25} color="#0a013b" /></Text>

        </TouchableOpacity>
        </View>

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





