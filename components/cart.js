
import React from 'react';
import { Image,ImageBackground, StyleSheet,SafeAreaView, ScrollView, Text, View, TouchableOpacity} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function cart() {
  return (
    
        // main view compo
       <View style={styles.main} >

            <View style={{width:'100%', height:'12%', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal:10}}>

                <TouchableOpacity >
                <Ionicons name="chevron-back" size={34} color="black" />
                </TouchableOpacity>

                <Text style={{fontSize:26, fontWeight:'bold', color: '#08003d'}}> My Order</Text>

                <TouchableOpacity style={{marginRight:18}}>
                <AntDesign name="delete" size={32} color="#08003d" />
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: -11, width:'100%', height:'7%', flexDirection:'row', alignItems:'center', justifyContent:'space-around',}} >

                <View style={{width: '25%', height:'80%',backgroundColor:'#08003d', borderRadius: 20,  alignItems:'center' }}> 
                    <Text style={{fontSize:23, color:'#fff'}}> All </Text> 
                </View>

                <View style={{width: '25%', height:'80%',   alignItems:'center' }}> 
                    <Text style={{fontSize:23, color:'#505256'}}> Coming </Text> 
                </View>

                <View style={{width: '25%', height:'80%', alignItems:'center' }}> 
                    <Text style={{fontSize:23, color:'#505256'}}> History </Text> 
                </View>
                
                
            </View>


            {/* Riskyyy */}



            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

            <View style={styles.row}>

                <View style={{width:'47%'}}>
                    <TouchableOpacity style={styles.ro1} >
                    
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


            </ScrollView>
            </SafeAreaView>

            {/* Riskyyy */}

       </View> 

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

    main:{
    flex:1,
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

      image:{
        width:'100%',
        height:180,
        justifyContent:'center',
        alignItems:'center',
    
      },
 

});





