
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
                 backgroundColor:'#f2f2f2'}}>
            
            <TouchableOpacity >
            <Ionicons name="chevron-back" size={34} color="#0f5a71" 
                onPress={() => navigation.push("login", { name: "login" })}
            />
            </TouchableOpacity>

            <Text style={{fontSize:26, fontWeight:'bold', color: '#0f5a71'}}>Collections</Text>

            <TouchableOpacity style={{marginRight:18}}>
            <Ionicons name="fast-food-outline" size={35} color="#0f5a71" 
                onPress={() => navigation.push("login", { name: "login" })} 
            />
            </TouchableOpacity>

            </View>

                
                {/* The midle compo */}

    
            <ScrollView style={styles.scrollView}
            showsHorizontalScrollIndicator={false}
             showsVerticalScrollIndicator={false}>

            
                    {/* Horizontal lane */}

                <View style={styles.row}>

                    <View style={{width:'100%', alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%',  justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("home", { name: "home" })}>

                            <ImageBackground
                                style={styles.image}
                                imageStyle={{ borderRadius: 10}}
                                source={require('../assets/bags.jpg')} >

                                <View style={{justifyContent:'flex-end', marginLeft:10 }}>
                                <Text style={{color:'#f9f9f9', fontSize:37,fontWeight: 'bold' }}>Totes</Text>
                                
                                </View>

                            </ImageBackground>

                        </TouchableOpacity>

                    </View>


                </View>


                    {/* row 1 */}
                <View style={styles.row}>

                    <View style={{width:'47%',   alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%', height:220, justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("home", { name: "home" })}>

                            <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                            source={require('../assets/satchel.png')} />
                            
                            <View style={{marginTop:-1,}}>
                            <Text style={{color:'#0f5a71', fontSize:22,fontWeight: 'bold' }}>Satchel</Text>
                            
                            </View>

                        </TouchableOpacity>

                    </View>

                        {/* OTHER SIDE */}

                    <View style={{width:'47%',   alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%', height:220, justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("home", { name: "home" })}>

                            <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                            source={require('../assets/backpack.png')} />
                            
                            <View style={{marginTop:-1,}}>
                            <Text style={{color:'#0f5a71', fontSize:22,fontWeight: 'bold' }}>Backpack</Text>
                            
                            </View>

                        </TouchableOpacity>

                    </View>

                </View>


                {/* row 2 */}

                <View style={styles.row}>

                    <View style={{width:'47%',  alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%', height: 220, justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("home", { name: "home" })}>

                            <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                            source={require('../assets/backpack.png')} />
                            
                            <View style={{marginTop:-1,}}>
                            <Text style={{color:'#0f5a71', fontSize:22,fontWeight: 'bold' }}>Crossbody</Text>
                            
                            </View>

                        </TouchableOpacity>

                    </View>

                        {/* OTHER SIDE */}

                    <View style={{width:'47%', alignItems: 'center'}}>

                        <TouchableOpacity style={{width:'100%',  height:220, justifyContent:'center', alignItems:'center'}}
                            onPress={() => navigation.push("home", { name: "home" })}>

                            <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                            source={require('../assets/bag2.png')} />
                            
                            <View style={{marginTop:-1,}}>
                            <Text style={{color:'#0f5a71', fontSize:22,fontWeight: 'bold' }}>Baguette</Text>

                            </View>

                        </TouchableOpacity>

                    </View>

                </View>



                {/* Testing Row */}
                

            </ScrollView>

            

            <View style={styles.tabs}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
                 }}
                 onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <Ionicons name="ios-home-outline" size={35} color="#0f5a71" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                 }}
                onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <MaterialCommunityIcons name="food-fork-drink" size={39} color="#0f5a71" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                }}
                onPress={() => navigation.push("cart", { name: "cart" })}>
                <Ionicons name="cart-outline" size={39} color="#0f5a71" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                }}
                onPress={() => navigation.push("home", { name: "home" })}>
                <AntDesign name="profile" size={36} color="#0f5a71" />
              </TouchableOpacity>

            </View>

        </SafeAreaView>

  

  ); 
}

const styles = StyleSheet.create({

  main_cont:{
    flex:1,
    backgroundColor: '#f2f2f2',
    },


  scrollView: {
    flex:1,
    backgroundColor: '#f2f2f2',
    width:'100%'
  },


  roller:{
   flex:1,
  },

  row:{
    flexDirection: "row",
    justifyContent: 'space-around',
    width:'100%',
  
    

  },

  image: {
    width:'100%',
    height:220,
    marginBottom:7,
  },

  tabs:{
    flexDirection: 'row',
    width: '100%',
    height: 60,
    position: 'relative',
    justifyContent: 'space-around',
    alignItems:'center', 
    borderTopLeftRadius:7,
    borderTopRightRadius:7,
    backgroundColor:'#fcce82', 
   
 
  },
  
});





