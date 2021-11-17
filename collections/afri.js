
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
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function afri({navigation}) {
  return (
        <SafeAreaView style={styles.main_cont}>

            <View style={{width:'100%', height:'45%', backgroundColor:'#e3e5e8', borderBottomLeftRadius:25,
            borderBottomRightRadius:25,
            }}>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:7, marginTop:5}}>

                    <TouchableOpacity>
                    <MaterialIcons name="forward-to-inbox" size={35} color="#0f5a71" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <AntDesign name="menu-fold" size={30} color="#0f5a71" />
                    </TouchableOpacity>

                </View>
                
                <View style={{width:'100%', height:'85%', justifyContent:'center', alignItems:'center', 
                }}>
                <Image
                    style={{width:'60%', height:'100%', marginTop:-10}}
                    source={require('../assets/des.png')}
                />
                </View>
                

                <View style={{width:'100', height:50, alignItems:'flex-end', marginRight:30, borderRadius:15, }}>
                <TouchableOpacity style={{ backgroundColor:'white' ,width:50, height:50, justifyContent:'center',
                alignItems:'center', borderRadius:10}}>

                    <FontAwesome name="heart" size={29} color="#fcce82" />

                </TouchableOpacity>
                </View>

            </View>

            <View style={{flex:1}}>

                    <View style={{marginLeft:10, marginTop:5}}>
                        <Text style={{fontSize:33, fontWeight:'bold', color:'#0f5a71'}}>Back Pack</Text>
                        <Text style={{fontSize:22, fontWeight:'200', marginTop:-5, marginBottom:10 ,color:'#9097a2'}}>unisex</Text>
                    </View>
                    
                    <View style={{width:'100%', height:40, flexDirection:'row', justifyContent:'space-around',
                    marginBottom:5}}>
                        <Text style={{fontSize:25, fontWeight:'bold', color:'#fcce82'}}>
                         15.99$
                        </Text>

                        <TouchableOpacity style={{backgroundColor:'#0f5a71', borderRadius:15, width:80,
                        justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                            <Text style={{fontSize:28, fontWeight:'bold', color:'#fcce82'}}> - </Text>
                            <Text style={{fontSize:25, fontWeight:'bold', color:'#fcce82'}}> 1 </Text>
                            <Text style={{fontSize:28, fontWeight:'bold', color:'#fcce82'}}> + </Text>
                           
                        </TouchableOpacity>
                    </View>

                    <Text style={{fontWeight:'600', fontSize:25 , marginBottom:2.5, color:'#0f5a71'}}> About Product</Text>

                    <Text style={{fontWeight:'300', fontSize:16, marginBottom:20, marginHorizontal:2,
                     color:'#8c8c8c'}}>
                        A backpack is a small bag that women and some men may carry around with them. 
                        A backpack is a bag that is carried on the shoulder or originally in the hand (hence backpack). 
                        There are so many types of these bags now from modern ones to plain ones etc. 
                        A backpack usually contains women's make-up, files, diaries etc.
                    </Text>

                    <View style={{height:'9%', width:'100%', alignItems:'center', 
                    flexDirection:'row', justifyContent:'center', position: 'relative',}}>
                    
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
                        width:'65%', height:50, backgroundColor: '#fcce82', borderRadius:10, }}
                        onPress={() => navigation.push("Collections", { name: "Collections" })}>
                            <Text style={{fontSize:18, fontWeight: 'bold', color:'#efefef'}}> Ad to Bag </Text>
                            <Ionicons name="arrow-forward" size={24} color="#efefef" />
                        </TouchableOpacity>

              
                    </View>

                
            </View>

            

            <View style={styles.tabs}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
                 }}
                 onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <Ionicons name="ios-home-outline" size={35} color="#0f5a71" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                 }}
                onPress={() => navigation.push("home", { name: "home" })}>
                <FontAwesome name="shopping-bag" size={35} color="#0f5a71" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                }}
                onPress={() => navigation.push("cart", { name: "cart" })}>
                <Ionicons name="cart-outline" size={39} color="#0f5a71" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                }}
                onPress={() => navigation.push("afri", { name: "afri" })}>
               <FontAwesome name="cc-mastercard" size={35} color="#0f5a71" />
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
    backgroundColor:'#fff',
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
    height: 60,
    position: 'relative',
    justifyContent: 'space-around',
    alignItems:'center', 
    borderTopLeftRadius:7,
    borderTopRightRadius:7,
    backgroundColor:'#fcce82',
 
  },
  
});





