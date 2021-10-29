
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function Collections() {
  return (


      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.row}>

            <View style={{width:'47%'}}>
              <TouchableOpacity style={styles.ro1}>
                <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 10}}
                source={require('../assets/kebab.jpg')} >

                  <Text>Goooo</Text>

                </ImageBackground>
              </TouchableOpacity>
            </View>

              
            <View style={{width:'47%'}} >
              <TouchableOpacity style={styles.ro2}>
              
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

  // ro1:{
  //   borderRadius:10,
  // },

  ro2:{
    backgroundColor:'yellow',
    height:180,
    borderRadius: 10,
    
  },

  image:{
    width:'100%',
    height:180,
  }



});





