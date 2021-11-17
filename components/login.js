
import React from 'react';
import { 
  ImageBackground,
  Image, 
  StyleSheet, 
  Text, 
  TextInput,
  SafeAreaView,
  View, 
  TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function login({navigation}) {
  return (

        <SafeAreaView style={styles.main} >

          <ImageBackground source={require('../assets/login.jpg')}
           resizeMode="cover" style={styles.image}>

            <View style={{alignItems:'flex-end', marginTop:10, marginRight:20}}>
              <FontAwesome name="shopping-bag" size={65} color="#242829" />
              <Text style={{fontSize:20, fontWeight:'bold', color:'#242829', marginRight:-15}}>BAGGIES </Text>
            </View>

            <View style={{flex:1, justifyContent: 'flex-end', alignItems:'center', marginBottom:30}}>

                <View style={{width:'100%'}}>

                <TextInput style={styles.textinput} placeholder='Username' underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textinput} placeholder='Password' underlineColorAndroid={'transparent'} secureTextEntry></TextInput>
        
                </View>

            </View>
            

            <View style={{height:'9%', width:'100%', alignItems:'center', 
             flexDirection:'row', justifyContent:'flex-end', position: 'relative',}}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
               width:'30%', height:45, backgroundColor: '#242829', borderRadius:10, marginRight:'15%',}}
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
    height: 40,
    width: '70%',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth:1,
    marginBottom:20,
    fontWeight:'500',
    fontSize:17,
  },

});





