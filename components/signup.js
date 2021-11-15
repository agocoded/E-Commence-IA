
import React from 'react';
import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  SafeAreaView,
  TextInput,
  View, 
  TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function signup({navigation}) {
  return (



        <SafeAreaView style={styles.main}>


          <ImageBackground source={require('../assets/signup.jpg')}
           resizeMode="cover" style={styles.image}>

            <View style={{alignItems:'flex-end', marginTop:10, marginRight:20}}>
            <FontAwesome name="shopping-bag" size={65} color="#242829" />
            <Text style={{fontSize:20, fontWeight:'bold', color:'#242829', marginRight:-15}}>BAGGIES </Text>
            </View>

            <View style={styles.start}>

                <View style={{justifyContent:'center', alignItems:'center', marginBottom:60}}>

                <TextInput style={styles.textinput} placeholder='Username' underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textinput} placeholder='Email' underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textinput} placeholder='Password' underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textinput} placeholder='Confirm Password' underlineColorAndroid={'transparent'}></TextInput>

                </View>

            </View>

            <View style={{height:'9%', width:'100%', alignItems:'baseline', 
             flexDirection:'row', justifyContent:'space-around', position: 'relative',}}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
               width:'30%', height:45, backgroundColor: '#242829', borderRadius:10,}}
               onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <Text style={{fontSize:18, fontWeight: 'bold', color:'#efefef'}}> Go </Text>
                <Ionicons name="arrow-forward" size={24} color="#efefef" />
              </TouchableOpacity>

              
            </View>

          </ImageBackground>

        </SafeAreaView>

  

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
    height: 30,
    width: '70%',
    justifyContent: 'center',
    color: '#242829',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth:1,
    marginBottom:20,
  },

  start:{
    flex:1,
    justifyContent:'flex-end',
    marginBottom: -40,
    
 

  }

});





