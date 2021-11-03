
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function Collections({navigation}) {
  return (


      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.row}>

            <View style={{width:'47%'}}>
              <TouchableOpacity style={styles.ro1} 
              onPress={() => navigation.push("afri", { name: "afri" })}>
                
                <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 10}}
                source={require('../assets/fufu.jpg')}
                 >

                <View style={{marginTop:100,}}>
                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>African Dishes</Text>
                <Text style={{color:'#46474b', fontSize:18,}}>  140 places</Text>
                </View>

                </ImageBackground>
              </TouchableOpacity>
            </View>

              
            <View style={{width:'47%'}} >
              <TouchableOpacity style={styles.ro2}>

              
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 10}}
                source={require('../assets/dessert.jpg')} >

                <View style={{marginTop:100,}}>
                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                <Text style={{color:'#46474b', fontSize:18,}}>  160 places</Text>
                </View>

                </ImageBackground>

              </TouchableOpacity>
            </View>

          </View>

          {/* Second Row  */}

          <View style={styles.row1}>

            <View style={{width:'47%'}}>
              <TouchableOpacity style={styles.ro1}>
                
                <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 10}}
                source={require('../assets/tsofi.jpg')} >

                <View style={{marginTop:100,}}>
                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Dom3do</Text>
                <Text style={{color:'#46474b', fontSize:18,}}>  14 places</Text>
                </View>

                </ImageBackground>
              </TouchableOpacity>
            </View>

              
            <View style={{width:'47%'}} >
              <TouchableOpacity style={styles.ro2}>

              
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 10}}
                source={require('../assets/palm.jpg')} >

                <View style={{marginTop:100,}}>
                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Locals</Text>
                <Text style={{color:'#46474b', fontSize:18,}}>  5 places</Text>
                </View>

                </ImageBackground>

              </TouchableOpacity>
            </View>

          </View>



          {/* Third Row  */}

          <View style={styles.row1}>

            <View style={{width:'47%'}}>
              <TouchableOpacity style={styles.ro1}>
                
                <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 10}}
                source={require('../assets/fish.jpg')} >

                <View style={{marginTop:100,}}>
                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Fish Foods</Text>
                <Text style={{color:'#46474b', fontSize:18,}}>  14 places</Text>
                </View>

                </ImageBackground>
              </TouchableOpacity>
            </View>

              
            <View style={{width:'47%'}} >
              <TouchableOpacity style={styles.ro2}>

              
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 10}}
                source={require('../assets/organic.jpg')} >

                <View style={{marginTop:100,}}>
                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Oragnics</Text>
                <Text style={{color:'#46474b', fontSize:18,}}>  150 places</Text>
                </View>

                </ImageBackground>

              </TouchableOpacity>
            </View>

          </View>


        {/* Fourth Row  */}

          <View style={styles.row1}>

            <View style={{width:'47%'}}>
              <TouchableOpacity style={styles.ro1}>
                
                <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 10}}
                source={require('../assets/noodles.jpg')} >

                <View style={{marginTop:100,}}>
                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}> Noodles</Text>
                <Text style={{color:'#46474b', fontSize:18,}}>  14 places</Text>
                </View>

                </ImageBackground>
              </TouchableOpacity>
            </View>

              
            <View style={{width:'47%'}} >
              <TouchableOpacity style={styles.ro2}>

              
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 10}}
                source={require('../assets/burgar.jpg')} >

                <View style={{marginTop:100,}}>
                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Burgar</Text>
                <Text style={{color:'#46474b', fontSize:18,}}>  11 places</Text>
                </View>

                </ImageBackground>

              </TouchableOpacity>
            </View>

          </View>



        </ScrollView>
      </SafeAreaView>

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    backgroundColor: '#fff',
    width:'100%'
  },

  row:{
    flexDirection: "row",
    justifyContent: 'space-around',
    width:'100%',
    marginTop:5,
  },

  row1:{
    flexDirection: "row",
    justifyContent: 'space-around',
    width:'100%',
    marginTop:10,
  },

  // ro1:{
  //   justifyContent:'center',
  //   alignItems: 'flex-end'
  // },

  // ro2:{
  //   backgroundColor:'yellow',
  //   height:180,
  //   borderRadius: 10,
    
  // },

  image:{
    width:'100%',
    height:180,
    justifyContent:'center',
    alignItems:'center',

  },

  // pricing:{
  //   flex:1,
  //   justifyContent:'center',
  //   alignItems: 'flex-end'
  // }



});





