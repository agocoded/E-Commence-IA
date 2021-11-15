
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


export default function home({navigation}) {
  return (
        <SafeAreaView style={styles.main_cont}>

          <View style={{marginTop:20, marginLeft:15, marginBottom:5}}>
            <Text style={{fontSize:40, fontWeight:'bold', color:'#403b58'}}>Best Bags</Text>
            <Text style={{fontSize:20, color:'#403b58', marginTop:-5}}>Perfect Choice</Text>
          </View>

          <View style={{width:'100%',height: 50, justifyContent: 'space-around', alignContent:'center',
          flexDirection: 'row', }}> 

            <View style={{width:'70%',flexDirection:'row', backgroundColor:'#fefefe', justifyContent:'space-around', alignItems:'center',
            borderRadius:20}}>
              <TouchableOpacity>
              <FontAwesome name="search" size={24} color="#403b58"  style={{marginLeft:15}} />
              </TouchableOpacity>
              <TextInput style={{marginLeft:10,color:'#403b58', fontSize:20}} placeholder='Search' underlineColorAndroid={'transparent'}></TextInput>
            </View>

            <TouchableOpacity style={{marginLeft:-20 ,borderRadius:20, width:'15%', backgroundColor: '#fefefe', justifyContent:'center', alignItems:'center' }}>
              <Ionicons name="color-filter-sharp" size={40} color="#403b58" />
            </TouchableOpacity>
            
          </View>


          <View style={{flexDirection:'row', justifyContent: 'space-around', height:40, width:'100%', marginTop:13}}>

              <TouchableOpacity style={{width:60, backgroundColor:'#403b58', borderRadius:12,
              justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#fefefe'}}>Tote</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#403b58'}}>Crossbody</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#403b58'}}>Clutch</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#403b58'}}>Duffle</Text>
              </TouchableOpacity>


          </View>
          
                
              {/* The midle compo */}

    
            <ScrollView style={{flex:1, marginTop:30,}}
             showsHorizontalScrollIndicator={false}
             showsVerticalScrollIndicator={false}>

              <View style={{width:'100%', height:220,alignItems:'center', marginBottom:10}}>
                
                <View style={{width:'94%', height:'100%', flexDirection:'row',justifyContent:'space-around', 
                alignItems:'center', backgroundColor:'#fefefe', borderRadius:20}}>

                  <TouchableOpacity style={{width: '45%', height:'90%', backgroundColor:'#f2f2f2', borderRadius:20}}>

                  </TouchableOpacity>

                  <View style={{width:'50%', height:'90%',}}>
                    <Text style={{fontSize:29, fontWeight:'bold', color:'#403b58'}}>Handbag</Text>
                    <Text style={{fontSize:20, fontWeight:'200', marginTop:-5, marginBottom:18, color:'#403b58'}}>women</Text>
                    <Text style={{fontSize:16, fontWeight:'200', color:'#403b58'}}>Try the new fleaking style</Text>
                    <Text style={{fontSize:16, fontWeight:'200', marginBottom:28, color:'#403b58'}}>Go with the flow</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center', 
                    height:45}}>

                      <View style={{width:'40%',justifyContent:'center', alignItems:'center'}}>
                      <Text style={{ fontWeight:'bold', fontSize:25, color:'#403b58'}}>$120</Text>
                      </View>

                      <TouchableOpacity style={{width:'40%', height:35,backgroundColor:'#403b58', alignItems:'center', justifyContent:'center',
                      borderRadius:10}}>
                        <Text style={{fontWeight:'bold', fontSize:18,  color:'#fefefe'}}>Buy</Text>
                      </TouchableOpacity>

                    </View>

                  </View>

                </View>
              </View>  

              {/* Second Row */}

              <View style={{width:'100%', height:220,alignItems:'center', marginBottom:10}}>
                
                <View style={{width:'94%', height:'100%', flexDirection:'row',justifyContent:'space-around', 
                alignItems:'center', backgroundColor:'#fefefe', borderRadius:20}}>

                  <TouchableOpacity style={{width: '45%', height:'90%', backgroundColor:'#f2f2f2', borderRadius:20}}>

                  </TouchableOpacity>

                  <View style={{width:'50%', height:'90%',}}>
                    <Text style={{fontSize:29, fontWeight:'bold', color:'#403b58'}}>Handbag</Text>
                    <Text style={{fontSize:20, fontWeight:'200', marginTop:-5, marginBottom:18, color:'#403b58'}}>women</Text>
                    <Text style={{fontSize:16, fontWeight:'200', color:'#403b58'}}>Try the new fleaking style</Text>
                    <Text style={{fontSize:16, fontWeight:'200', marginBottom:28, color:'#403b58'}}>Go with the flow</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center', 
                    height:45}}>

                      <View style={{width:'40%',justifyContent:'center', alignItems:'center'}}>
                      <Text style={{ fontWeight:'bold', fontSize:25, color:'#403b58'}}>$120</Text>
                      </View>

                      <TouchableOpacity style={{width:'40%', height:35,backgroundColor:'#403b58', alignItems:'center', justifyContent:'center',
                      borderRadius:10}}>
                        <Text style={{fontWeight:'bold', fontSize:18,  color:'#fefefe'}}>Buy</Text>
                      </TouchableOpacity>

                    </View>

                  </View>

                </View>
              </View>


              {/* Third Row

              <View style={{width:'100%', height:220,alignItems:'center',}}>
                
                <View style={{width:'94%', height:'100%', flexDirection:'row',justifyContent:'space-around', 
                alignItems:'center', backgroundColor:'#fefefe', borderRadius:20}}>

                  <TouchableOpacity style={{width: '45%', height:'90%', backgroundColor:'#f2f2f2', borderRadius:20}}>

                  </TouchableOpacity>

                  <View style={{width:'50%', height:'90%',}}>
                    <Text style={{fontSize:29, fontWeight:'bold', color:'#403b58'}}>Handbag</Text>
                    <Text style={{fontSize:20, fontWeight:'200', marginTop:-5, marginBottom:18, color:'#403b58'}}>women</Text>
                    <Text style={{fontSize:16, fontWeight:'200', color:'#403b58'}}>Try the new fleaking style</Text>
                    <Text style={{fontSize:16, fontWeight:'200', marginBottom:28, color:'#403b58'}}>Go with the flow</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center', 
                    height:45}}>

                      <View style={{width:'40%',justifyContent:'center', alignItems:'center'}}>
                      <Text style={{ fontWeight:'bold', fontSize:25, color:'#403b58'}}>$120</Text>
                      </View>

                      <TouchableOpacity style={{width:'40%', height:35,backgroundColor:'#403b58', alignItems:'center', justifyContent:'center',
                      borderRadius:10}}>
                        <Text style={{fontWeight:'bold', fontSize:18,  color:'#fefefe'}}>Buy</Text>
                      </TouchableOpacity>

                    </View>

                  </View>

                </View>
              </View> */}

            </ScrollView>

            
           

            <View style={styles.tabs}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
                }}
                onPress={() => navigation.push("home", { name: "home" })}>
                <Ionicons name="ios-home-outline" size={35} color="#262523" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                }}
                onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <MaterialCommunityIcons name="food-fork-drink" size={39} color="#262523" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
                }}
                onPress={() => navigation.push("cart", { name: "cart" })}>
                <Ionicons name="cart-outline" size={39} color="#262523" />
              </TouchableOpacity>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
              }}
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
    backgroundColor: '#f2f2f2',
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
    justifyContent: 'space-around',
    alignItems:'center', 
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor:'#f8f8f8', 
   
 
  },
  
});





