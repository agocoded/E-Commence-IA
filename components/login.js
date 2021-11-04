
import React from 'react';
import { 
  ImageBackground,
  Image, 
  StyleSheet, 
  Text, 
  TextInput,
  View, 
  TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default function login({navigation}) {
  return (

       <View style={styles.main} >

          <ImageBackground source={require('../assets/log.jpg')}
           resizeMode="cover" style={styles.image}>

            <View style={{marginVertical:150, justifyContent:'center', alignItems:'center',}}>
              <Text style={{fontSize:17,  color: '#fff'}}>Login Here</Text>
            </View>

            <View style={{flex:1}}>

                <View style={{justifyContent:'center', alignItems:'center', marginBottom:60}}>
                <Text style={{fontSize:40, fontWeight:'bold', color: '#fff'}}>Ready</Text>
                <Text style={{fontSize:17,  color: '#fff'}}>for the new taste?!</Text>
                </View>


                <View style={{justifyContent:'center', alignItems:'center', marginBottom:60}}>

                <TextInput style={styles.textinput} placeholder='Username' underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textinput} placeholder='Password' underlineColorAndroid={'transparent'}></TextInput>
        
                </View>

            </View>
            

            <View style={{height:85, width:'100%',justifyContent:'center', alignItems:'center', 
              borderRadius:9, backgroundColor:'#fbf0e9', flexDirection:'row', justifyContent:'space-around',
              position: 'relative', backgroundColor:'#fd7768'}}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
                backgroundColor:'#fd7768'}}
                onPress={() => navigation.push("home", { name: "home" })}>
                <Text style={{fontSize:18, fontWeight: 'bold', color: '#262523'}}> LOG IN </Text>
                <Ionicons name="arrow-forward" size={24} color="#262523" />
              </TouchableOpacity>

              
            </View>

          </ImageBackground>
        
       </View>

  

  ); 
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: '#fcaf01',
  },

  image: {
    flex: 1,
  },

  textinput:{
    height: 40,
    width: '70%',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth:1,
    marginBottom:20,
  },

});





