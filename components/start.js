
import React from 'react';
import { ImageBackground,Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function start({navigation}) {
  return (

    // <ImageBackground source={image} resizeMode="cover" style={styles.images} blurRadius={2} >

       <View style={styles.images} >

        <Image source={require('../assets/meat.jpg')} 
        style={styles.car} blurRadius={0.1} />
        <Text style={{fontWeight:'bold', fontSize:14, color: '#fc7f6d'}}>
          La <Text style={{fontWeight:'bold', color:'grey', margin:2,}}> Meat </Text> Enjoy..
        </Text>
        <TouchableOpacity style={styles.touches}>
          <Text 
          style={styles.texts} 
          onPress={() => navigation.push("Items", { name: "Items" })
        }> Getting Started </Text>
        </TouchableOpacity>

       </View>

  

  ); 
}

const styles = StyleSheet.create({

  car:{
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius:15,
  },

  touches:{

    fontWeight: 'bold',
    backgroundColor: '#fc7f6d',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    height: '6.5%',
    borderRadius: 5,
    marginTop:10,

  }, 

  texts:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
   
  },

  images: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    height: '110%'


  },

});





