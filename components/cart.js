
import React from 'react';
import { 
  Image, 
  ImageBackground,
  StyleSheet, 
  Text, 
  TextInput,
  SafeAreaView, 
  ScrollView, 
  View, 
  TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function cart({navigation}) {
  return (
        <SafeAreaView style={styles.main_cont}>

          <View style={{flexDirection:'row', marginTop:10 , justifyContent:'flex-end',
           alignItems:'center', width:'100%', height:50, }}>

            <TouchableOpacity><FontAwesome name="search" size={40} color="#1e242c"  style={{ marginRight:15}} /></TouchableOpacity>

            <TouchableOpacity><Ionicons name="notifications-outline" size={45} color="#1e242c" /></TouchableOpacity>
          
          </View>

          <View style={{marginLeft:15, marginBottom:5, marginTop:-15}}>
            <Text style={{fontSize:40, fontWeight:'bold', color:'#1e242c'}}>My Bag</Text>
          </View>
                
              {/* The midle compo */}

    
            <ScrollView style={{flex:1, marginTop:15,}}
             showsHorizontalScrollIndicator={false}
             showsVerticalScrollIndicator={false}>

              <View style={{width:'100%', height:220,alignItems:'center', marginBottom:10}}>
                
                <View style={{width:'94%', height:'100%', flexDirection:'row',justifyContent:'space-around', 
                alignItems:'center', backgroundColor:'#fefefe', borderRadius:20}}>

                  <TouchableOpacity style={{width: '45%', height:'90%', backgroundColor:'#e57f7e', borderRadius:20}}>

                    <ImageBackground source={require('../assets/bag1.png')}
                      resizeMode="cover" style={{flex:1, alignItems:'flex-end', margin:8}}>

                      <Entypo name="heart" size={30} color="#ffcccc" />

                    </ImageBackground>

                  </TouchableOpacity>

                  <View style={{width:'50%', height:'90%',}}>
                    <Text style={{fontSize:29, fontWeight:'bold', color:'#1e242c'}}>Handbag</Text>
                    <Text style={{fontSize:20, fontWeight:'200', marginTop:-5, marginBottom:18, color:'#1e242c'}}>women</Text>
                    <Text style={{fontSize:16, fontWeight:'200', color:'#1e242c'}}>Try the new fleaking style</Text>
                    <Text style={{fontSize:16, fontWeight:'200', marginBottom:28, color:'#1e242c'}}>Go with the flow</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center', 
                    height:45}}>

                      <TouchableOpacity style={{width:'38%', height:35,backgroundColor:'#eaece9', alignItems:'center', justifyContent:'center',
                      borderRadius:10}}>
                        <Ionicons name="ios-remove-circle-sharp" size={32} color="1e242c" />
                      </TouchableOpacity>

                      <View style={{width:'20%',justifyContent:'center', alignItems:'center'}}>
                      <Text style={{ fontWeight:'bold', fontSize:30, color:'#1e242c'}}>1</Text>
                      </View>

                      <TouchableOpacity style={{width:'38%', height:35,backgroundColor:'#eaece9', alignItems:'center', justifyContent:'center',
                      borderRadius:10}}>
                        <Ionicons name="add-circle-sharp" size={32} color="1e242c" />
                      </TouchableOpacity>

                    </View>

                  </View>

                </View>
              </View>  


              {/* Second Row  */}

              <View style={{width:'100%', height:220,alignItems:'center', marginBottom:10}}>
                
                <View style={{width:'94%', height:'100%', flexDirection:'row',justifyContent:'space-around', 
                alignItems:'center', backgroundColor:'#fefefe', borderRadius:20}}>

                  <TouchableOpacity style={{width: '45%', height:'90%', backgroundColor:'#f2f2f2', borderRadius:20}}>

                    <ImageBackground source={require('../assets/backpack.png')}
                      resizeMode="cover" style={{flex:1, alignItems:'flex-end', margin:8}}>

                      <Entypo name="heart" size={30} color="#ffcccc" />

                    </ImageBackground>

                  </TouchableOpacity>

                  <View style={{width:'50%', height:'90%',}}>
                    <Text style={{fontSize:29, fontWeight:'bold', color:'#1e242c'}}>Crossbody</Text>
                    <Text style={{fontSize:20, fontWeight:'200', marginTop:-5, marginBottom:18, color:'#1e242c'}}>women</Text>
                    <Text style={{fontSize:16, fontWeight:'200', color:'#1e242c'}}>Try the new fleaking style</Text>
                    <Text style={{fontSize:16, fontWeight:'200', marginBottom:28, color:'#1e242c'}}>Go with the flow</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center', 
                    height:45}}>

                      <TouchableOpacity style={{width:'38%', height:35,backgroundColor:'#eaece9', alignItems:'center', justifyContent:'center',
                      borderRadius:10}}>
                        <Ionicons name="ios-remove-circle-sharp" size={32} color="1e242c" />
                      </TouchableOpacity>

                      <View style={{width:'20%',justifyContent:'center', alignItems:'center'}}>
                      <Text style={{ fontWeight:'bold', fontSize:30, color:'#1e242c'}}>1</Text>
                      </View>

                      <TouchableOpacity style={{width:'38%', height:35,backgroundColor:'#eaece9', alignItems:'center', justifyContent:'center',
                      borderRadius:10}}>
                        <Ionicons name="add-circle-sharp" size={32} color="1e242c" />
                      </TouchableOpacity>
                    </View>

                  </View>

                </View>
              </View>




              {/* Third Row  */}

              

            </ScrollView>


            <View style={{flexDirection:'row', marginBottom:30, justifyContent:'space-around',
              alignItems:'center', width:'100%', height:70, }}>

              <View style={{width:'35%', height:65, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:25, fontWeight:'500', color:'#1e242c'}}> Total Price </Text>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#fa9d0b'}}>55.39$</Text>
              </View>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
               width:'60%', height:60, backgroundColor: '#39736a', borderRadius:10,}}
               onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <Text style={{fontSize:23, fontWeight: 'bold', color:'#efefef'}}> Checkout </Text>
              </TouchableOpacity>
              
            </View>
              
            

            <View style={styles.tabs}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
                }}
                onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <Ionicons name="ios-home-outline" size={35} color="#b3c0b9" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                }}
                onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <MaterialCommunityIcons name="food-fork-drink" size={39} color="#b3c0b9" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                }}
                onPress={() => navigation.push("cart", { name: "cart" })}>
                <Ionicons name="cart-outline" size={39} color="#b3c0b9" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
              }}
                onPress={() => navigation.push("home", { name: "home" })}>
                <AntDesign name="profile" size={36} color="#b3c0b9" />
              </TouchableOpacity>



            </View>

 

        </SafeAreaView>

  

  ); 
}

const styles = StyleSheet.create({

  main_cont:{
    flex:1,
    backgroundColor:'#f0ebe5',
    },

  row:{
    flexDirection: "row",
    justifyContent: 'space-around',
    width:'100%',
    marginBottom:7,
    

  },

  image: {
    width:'100%',
    height:220,
    marginBottom:7,
  },

  tabs:{
    flexDirection: 'row',
    width: '100%',
    height:60,
    justifyContent: 'space-around',
    alignItems:'center', 
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor:'#f5f4f2', 
   
 
  },
  
});





