
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { 
  ImageBackground,
  Image, 
  StyleSheet,
  SafeAreaView, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';


import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export default function start({navigation}) {
  return (


        <SafeAreaView style={styles.main}>


          <ImageBackground source={require('../assets/start.jpg')}
           resizeMode="cover" style={styles.image}>

            <View style={styles.bag}>
              <Text style={{fontSize:40, fontWeight:'bold', color:'#242829'}}>BAGGIES 
              <FontAwesome name="shopping-bag" size={65} color="#242829" />
              </Text>
            </View>

            <View style={styles.middle}>

              <View style={{justifyContent: 'flex-start',marginLeft:12 ,marginBottom:60, marginTop:10}}>
                <Text style={{fontSize:16,  color:'#242829', fontWeight: 'bold', marginBottom:-10}}>Unisex</Text>
                <Text style={{fontSize:32, fontWeight: 'bold', color:'#fff', }}>CLOTHING</Text>

              </View>

              <View style={{marginTop:-52, marginLeft:10}}>
                <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                  width:'35%', height:45, backgroundColor: '#adbec9', borderRadius:10, }}
                  onPress={() => navigation.push("signup", { name: "signup" })}>
                  <Text style={{fontSize:18, fontWeight: 'bold', color: '#efefef'}}>Get Started </Text>
                  
                </TouchableOpacity>
              </View>



            </View>
            


            <View style={{ height:'9%', width:'100%',justifyContent:'center', alignItems: 'center', 
              borderTopLeftRadius:5, borderTopRightRadius:25 , flexDirection:'row', justifyContent:'space-around',
              position: 'relative', marginHorizontal:20 }}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                 width:'35%', height:45, backgroundColor: '#efefef', borderRadius:10}}
                onPress={() => navigation.push("login", { name: "login" })}>
                <Text style={{fontSize:18, fontWeight: 'bold',
                 color: '#242829'}}> LOG IN </Text>
                <Ionicons name="arrow-forward" size={24} color="#242829" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                width:'35%', height:45, backgroundColor: '#242829', borderRadius:10, }}
                onPress={() => navigation.push("signup", { name: "signup" })}>
                <Text style={{fontSize:18, fontWeight: 'bold', color: '#efefef'}}>NEW </Text>
                <Ionicons name="add" size={27} color="#efefef" />
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
    width:null,
    height:null,
  },

  bag:{
    justifyContent: 'center',
    alignItems:'center',
    marginTop:30,
  },

  middle:{
    flex:1,
    justifyContent: 'flex-end',
    marginBottom:180,

  }

});





