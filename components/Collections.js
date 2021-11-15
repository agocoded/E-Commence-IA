
import React from 'react';
import { 
  Image, 
  ImageBackground,
  StyleSheet, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  View, 
  TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function home({navigation}) {
  return (
        <SafeAreaView style={styles.main_cont}>

          <View style={{width:'100%', marginBottom:5, paddingTop:10, borderBottomLeftRadius:5, borderBottomRightRadius:5,
                height:'10%', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                 backgroundColor:'#262523'}}>
            
            <TouchableOpacity >
            <Ionicons name="chevron-back" size={34} color="#89bc29" 
                onPress={() => navigation.push("login", { name: "login" })}
            />
            </TouchableOpacity>

            <Text style={{fontSize:26, fontWeight:'bold', color: '#89bc29'}}>Collections</Text>

            <TouchableOpacity style={{marginRight:18}}>
            <Ionicons name="fast-food-outline" size={35} color="#89bc29" 
                onPress={() => navigation.push("login", { name: "login" })} 
            />
            </TouchableOpacity>

            </View>

                
                {/* The midle compo */}

    
            <ScrollView style={styles.scrollView}>

            
                    {/* Horizontal lane */}

                <View style={styles.row}>

                    <View style={{width:'100%', alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%',  justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("Collections", { name: "Collections" })}>

                            <ImageBackground
                                style={styles.image}
                                imageStyle={{ borderRadius: 10}}
                                source={require('../assets/noodles.jpg')} >

                                <View style={{marginTop:100,}}>
                                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}> Noodles</Text>
                                
                                </View>

                            </ImageBackground>

                        </TouchableOpacity>

                    </View>


                </View>


                    {/* row 1 */}
                <View style={styles.row}>

                    <View style={{width:'47%',   alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%', height:220, justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("Collections", { name: "Collections" })}>

                            <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                            source={require('../assets/fufu1.jpg')} />
                            
                            <View style={{marginTop:-1,}}>
                            <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>African Dishes</Text>
                            
                            </View>

                        </TouchableOpacity>

                    </View>

                        {/* OTHER SIDE */}

                    <View style={{width:'47%',   alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%', height:220, justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("Collections", { name: "Collections" })}>

                            <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                            source={require('../assets/palm1.jpg')} />
                            
                            <View style={{marginTop:-1,}}>
                            <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Local Drinks</Text>
                            
                            </View>

                        </TouchableOpacity>

                    </View>

                </View>


                {/* row 2 */}

                <View style={styles.row}>

                    <View style={{width:'47%',  alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%', height: 220, justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("Collections", { name: "Collections" })}>

                            <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                            source={require('../assets/dessert1.jpg')} />
                            
                            <View style={{marginTop:-1,}}>
                            <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                            
                            </View>

                        </TouchableOpacity>

                    </View>

                        {/* OTHER SIDE */}

                    <View style={{width:'47%', alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%',  height:220, justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("Collections", { name: "Collections" })}>

                            <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                            source={require('../assets/burgar1.jpg')} />
                            
                            <View style={{marginTop:-1,}}>
                            <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Burgars</Text>

                            </View>

                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView>

            

            <View style={styles.tabs}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
                backgroundColor:'#89bc29', }}
                onPress={() => navigation.push("home", { name: "home" })}>
                <Ionicons name="ios-home-outline" size={35} color="#262523" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                backgroundColor:'#89bc29' }}
                onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <MaterialCommunityIcons name="food-fork-drink" size={39} color="#262523" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                backgroundColor:'#89bc29'}}
                onPress={() => navigation.push("cart", { name: "cart" })}>
                <Ionicons name="cart-outline" size={39} color="#262523" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                backgroundColor:'#89bc29'}}
                onPress={() => navigation.push("home", { name: "home" })}>
                <AntDesign name="profile" size={36} color="#262523" />
              </TouchableOpacity>

            </View>

        </SafeAreaView>

  

  ); 
}

const styles = StyleSheet.create({

  main_cont:{
    flex:1,
    backgroundColor: '#262523',
    },


  scrollView: {
    flex:1,
    backgroundColor: '#262523',
    width:'100%'
  },


  roller:{
   flex:1,
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
    height:'9%',
    position: 'relative',
    justifyContent: 'space-around',
    alignItems:'center', 
    borderRadius:7,
    backgroundColor:'#89bc29', 
   
 
  },
  
});





