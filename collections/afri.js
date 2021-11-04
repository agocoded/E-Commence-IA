
import React from 'react';
import { ImageBackground, Image,  SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function afri({navigation}) {
  return (
       <View style={styles.bac} >

         <ImageBackground source={require('../assets/afrima.png')} style={styles.back}
         blurRadius={1.5} >

        <View style={styles.dv1}>

          <View style={{width:'100%', height:'15%', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal:10}}>

            <TouchableOpacity >
             <Ionicons name="chevron-back" size={34} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight:18}}>
              <FontAwesome name="heart" size={29} color="#08003d" />
            </TouchableOpacity>
           
          </View>

            {/* screen 2 */}
          <View style={{marginLeft:20, marginTop:5}}  >
            <Text style={{fontSize: 37, color:'#fff'}}> African Dishes </Text>
            <Text style={{fontSize: 18, color:'#fff', marginLeft:20}}> 03 Jamaican Street apt77</Text>
          </View>

          {/* screen 3 */}
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', marginTop:4}}>
            
            <View> 
              <Text style={{fontSize: 25, color:'#fff', fontWeight: 'bold'}}> 4.5 </Text>
              <Text style={{fontSize: 16, color:'#08003d', fontWeight: 'bold' }}> Ratings</Text>
            </View>

            <View> 
              <Text style={{fontSize: 25, color:'#fff'}}> 137K  </Text>
              <Text style={{fontSize: 16, color:'#08003d', fontWeight: 'bold'}}>Bookmarks </Text>
            </View>

            <View>
              <Text style={{fontSize: 25, color:'#fff', fontWeight: 'bold'}}> 246 </Text>
              <Text style={{fontSize: 16, color:'#08003d', fontWeight: 'bold'}}> Photos </Text>
            </View>

          </View>

          {/* screen 4 */}
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:10, }}>

          <View style={{width: '70%'}}> 
              <Text style={{fontSize: 16, color:'#08003d', }}>Pickup on your time. Your order is  </Text>
              <Text style={{fontSize: 16, color:'#08003d',}}>ready when you are </Text>
            </View>

            <View style={{width: '30%', marginTop:9}}>
              <TouchableOpacity style={{backgroundColor:'#fcaf01', borderRadius:10, height: 33,  justifyContent:'center', alignItems:'center'}}
                onPress={() => navigation.push("cart", { name: "cart" })}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color:'#08003d',}}> Order Now</Text>
              </TouchableOpacity>
            </View>
            
          </View>

        </View>



        {/* div 2 */}
        <View style={styles.dv2}>
          
          {/* overall container */}
          <View style={{flex:1}}>

              <View style={{ marginBottom:7 ,width: '100%', height:'7%', justifyContent:'center', alignItems:'center',}}>
                  <Text style={{ fontSize:15, fontWeight:'bold', color: '#08003d'}}>Featured Items</Text>
              </View>


            {/* Second row */}
            {/* added a scrollview to guide the height cos different screens */}


              {/* row 1 */}
              <View style={{marginBottom:5 ,flexDirection:'row', justifyContent:'space-around', height: 180, width:'100%',}}> 

                <View style={styles.button}>

                  <TouchableOpacity style={{ alignItems:'center', marginTop:5, }} >
                    <Image source={require('../assets/fufu.jpg')}  style={{width:100,
                    height:100  ,  borderRadius:5, marginBottom:5}}/>

                  <Text style={{fontWeight:'bold', fontSize:19 , color:'#08003d'}}> Fufu </Text>
                  <Text style={{fontSize:15, color:'#08003d'}}> with meat or fish</Text>
                  <Text style={{fontWeight:'bold', fontSize:16, color:'#08003d'}}> $50.00 </Text>
                  
                  </TouchableOpacity>

                </View>

                      {/* other side */}
                <View style={styles.button}>

                  <TouchableOpacity style={{ alignItems:'center', marginTop:5, }} >
                    <Image source={require('../assets/fufu.jpg')}  style={{width:100,
                    height:100  ,  borderRadius:5, marginBottom:5}}/>

                  <Text style={{fontWeight:'bold', fontSize:19 , color:'#08003d'}}> Fufu </Text>
                  <Text style={{fontSize:15, color:'#08003d'}}> with meat or fish</Text>
                  <Text style={{fontWeight:'bold', fontSize:16, color:'#08003d'}}> $50.00 </Text>
                  
                  </TouchableOpacity>

                </View>

              </View>

              {/* row 2 */}
              <View style={{marginBottom:1 ,flexDirection:'row', justifyContent:'space-around', height: 180, width:'100%',}}> 

                <View style={styles.button}>

                  <TouchableOpacity style={{ alignItems:'center', marginTop:5, }} >
                    <Image source={require('../assets/fufu.jpg')}  style={{width:100,
                    height:100  ,  borderRadius:5, marginBottom:5}}/>

                  <Text style={{fontWeight:'bold', fontSize:19 , color:'#08003d'}}> Fufu </Text>
                  <Text style={{fontSize:15, color:'#08003d'}}> with meat or fish</Text>
                  <Text style={{fontWeight:'bold', fontSize:16, color:'#08003d'}}> $50.00 </Text>
                  
                  </TouchableOpacity>

                </View>

                      {/* other side */}
                <View style={styles.button}>

                  <TouchableOpacity style={{ alignItems:'center', marginTop:5, }} >
                    <Image source={require('../assets/fufu.jpg')}  style={{width:100,
                    height:100  ,  borderRadius:5, marginBottom:5}}/>

                  <Text style={{fontWeight:'bold', fontSize:19 , color:'#08003d'}}> Fufu </Text>
                  <Text style={{fontSize:15, color:'#08003d'}}> with meat or fish</Text>
                  <Text style={{fontWeight:'bold', fontSize:16, color:'#08003d'}}> $50.00 </Text>
                  
                  </TouchableOpacity>

                </View>

              </View>


            </View>

        </View>



         </ImageBackground>


   
       </View>
  ); 
}

const styles = StyleSheet.create({
  bac:{
    flex:1,
  },

  container: {
    flex: 1,
  },

  scrollView: {
    backgroundColor: '#fff',
    width:'100%'
  },

  dv1:{
    width:'100%',
    height: '35%',
    marginTop:25,
    // backgroundColor:'blue'

  },

  dv2:{
    width:'100%',
    height:'70%',
    backgroundColor: '#fff',
    borderRadius:35

  },

 button:{
    height: '100%',
    width:'45%',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 3, width: 3 }, // IOS
    shadowOpacity: 5, // IOS
    shadowRadius: 10, //IOS
    borderRadius:10,
    elevation: 2, // Android
  
 },
  
  back:{
    width:'100%',
    height:'100%',
  }
  
});





