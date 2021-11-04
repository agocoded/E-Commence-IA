
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { 
  ImageBackground,
  Image, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';


import { Ionicons } from '@expo/vector-icons';



export default function start({navigation}) {
  return (

       <View style={styles.main} >

          <ImageBackground source={require('../assets/log.jpg')}
           resizeMode="cover" style={styles.image}>

            <View style={{marginVertical:190, justifyContent:'center', alignItems:'center',}}>
              <Text style={{fontSize:18,  color:'#fff'}}>Logo Here</Text>
            </View>

            <View style={{flex:1,}}>

            <View style={{justifyContent:'center', alignItems:'center', marginBottom:60}}>

              <Text style={{fontSize:40, fontWeight: 'bold', color:'#fff'}}>Welcome</Text>
              <Text style={{fontSize:18,  color:'#fff'}}>to your no.1 food joint</Text>
            

            </View>

            <View style={{justifyContent:'center', alignItems:'center', marginBottom:120}}>
              <Text style={{fontSize:14,color:'#fff'}}>LOG IN OR CREATE A NEW ACCOUNT</Text>
            </View>

            </View>
            


            <View style={{ height:85, width:'100%',justifyContent:'center', alignItems: 'center', 
              borderRadius:9, backgroundColor:'#fbf0e9', flexDirection:'row', justifyContent:'space-around',
              position: 'relative', backgroundColor:'#fd7768' }}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                backgroundColor:'#fd7768' }}
                onPress={() => navigation.push("login", { name: "login" })}>
                <Text style={{fontSize:18, fontWeight: 'bold',
                 color: '#262523'}}> LOG IN </Text>
                <Ionicons name="arrow-forward" size={24} color="#262523" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                backgroundColor:'#fd7768'}}
                onPress={() => navigation.push("signup", { name: "signup" })}>
                <Text style={{fontSize:18, fontWeight: 'bold', color: '#262523'}}>NEW </Text>
                <Ionicons name="add" size={27} color="#262523" />
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

});





