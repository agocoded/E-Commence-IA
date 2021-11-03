
import React from 'react';
import { ImageBackground,  SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function afri() {
  return (
       <View style={styles.bac} >

         <ImageBackground source={require('../assets/afrima.png')} style={styles.back}
         blurRadius={1.5} >

        <View style={styles.dv1}>

          <View style={{width:'100%', height:'15%', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal:10}}>

            <TouchableOpacity >
              <Ionicons name="arrow-back-circle" size={34} color="#08003d" />
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
              <Text style={{fontSize: 16, color:'#565656', }}> Ratings</Text>
            </View>

            <View> 
              <Text style={{fontSize: 25, color:'#fff'}}> 137K  </Text>
              <Text style={{fontSize: 16, color:'#565656',}}>Bookmarks </Text>
            </View>

            <View>
              <Text style={{fontSize: 25, color:'#fff', fontWeight: 'bold'}}> 246 </Text>
              <Text style={{fontSize: 16, color:'#565656', fontWeight: 'bold'}}> Photos </Text>
            </View>

          </View>

          {/* screen 4 */}
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:10, }}>

          <View style={{width: '70%'}}> 
              <Text style={{fontSize: 16, color:'#565656'}}>Pickup on your time. Your order is  </Text>
              <Text style={{fontSize: 16, color:'#565656',}}>Ready when you are </Text>
            </View>

            <View style={{width: '30%', marginTop:9}}>
              <TouchableOpacity style={{backgroundColor:'#fcaf01', borderRadius:10, height: 33,  justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color:'#08003d',}}> Order Now</Text>
              </TouchableOpacity>
            </View>
            
          </View>

        </View>



        {/* div 2 */}
        <View style={styles.dv2}>
          <TouchableOpacity style={styles.dv2touch}>

            {/* overall container */}
            <View style={{flex:1}}>

              <View style={{ marginTop: 23,width: '100%', height:'7%', backgroundColor: '#f7f6f9', justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontSize:15, fontWeight:'bold', color: '#08003d'}}>Featured Items</Text>
              </View>

              {/* Second row */}
              {/* added a scrollview to guide the height cos different screens */}

              <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>

              <View >

                {/* row 1 */}
                <View style={{flexDirection:'row', justifyContent:'space-around', height: 170, width:'100%',}}> 

                  <View style={{ height: '100%', width:'47%', backgroundColor:'blue'}}>
                    
                  </View>

                  <View style={{ height: '100%', width:'47%', backgroundColor:'red'}}>
                    <Text> Sup</Text>
                  </View>

                </View>

                {/* row 2 */}
                <View style={{flexDirection:'row', justifyContent:'space-around', height: 170, width:'100%',}}>

                  <View style={{ height: '100%', width:'47%', backgroundColor:'red'}}>
                    <Text> Sup</Text>
                  </View>

                  <View style={{ height: '100%', width:'47%', backgroundColor:'blue'}}>
                    <Text> Sup</Text>
                  </View>

                </View>

              </View>
              

              </ScrollView>
              </SafeAreaView>

              </View>


          </TouchableOpacity>
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
    // backgroundColor: '#fff'
  },

  dv2touch:{
    width: '100%',
    height: '100%',
    borderRadius: 35,
    backgroundColor: '#fff'


  },
  
  back:{
    width:'100%',
    height:'100%',
  }
  
});





