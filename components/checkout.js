
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
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function checkout({navigation}) {
  return (
        <SafeAreaView style={styles.main_cont}>

            <View style={{width:'100%', height:50, flexDirection:'row', justifyContent: 'space-between',
             marginTop:17 }}>

             <TouchableOpacity  onPress={() => navigation.push("afri", { name: "afri" })}>
              <Ionicons name="chevron-back" size={30} color="#0f5a71" />
             </TouchableOpacity>

              <Text style={{fontSize:25, fontWeight:'bold', color:'#0f5a71'}}>Payment Details</Text>
              
              <TouchableOpacity>
                <MaterialCommunityIcons name="account-question-outline" size={32} color="#0f5a71" 
                  style={{marginRight:5}}  />
              </TouchableOpacity>
            </View>
                

              {/* The midle compo */}
    
            <View style={{flex:1, marginTop:12, alignItems:'center', marginBottom:5}}>

              <View style={{width:'90%', backgroundColor:'#fff', borderRadius:15}}>

                <View style={{flexDirection:'row', justifyContent:'space-between', margin:5, marginTop:10}}>
                  <Text style={{fontSize:23, fontWeight:'600', color:'#0f5a71'}}> Credit Card </Text>
                  <Entypo name="chevron-up" size={27} color="#fcce82" />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around', margin:20, marginBottom:-1}}>
                  <FontAwesome name="cc-visa" size={33} color="#0f5a71" />
                  <FontAwesome name="cc-mastercard" size={33} color="#0f5a71" />
                  <FontAwesome name="cc-paypal" size={33} color="#0f5a71" />
                </View>

                <Image
                    style={{width:'100%', height:180, marginVertical:15,}}
                    source={require('../assets/visa.png')}
                />
                
                <View style={{justifyContent:'center', alignItems:'center', marginVertical:5, marginBottom:25 }}>
                  <Text style={{fontSize:20, fontWeight:'200', color:'#fcce82'}}>add new card</Text>
                </View>

              </View>

              <View style={{width:'90%', backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between',
               borderRadius:15 , marginTop:17, padding:15}} >
                  <Text style={{fontWeight:'700', fontSize:20, color:'#0f5a71'}}>Google Play</Text>
                  <Ionicons name="chevron-forward" size={30} color="#0f5a71" />
              </View>

              <View style={{width:'90%', backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between',
               borderRadius:15 , marginTop:17, padding:15}} >
                  <Text style={{fontWeight:'700', fontSize:20, color:'#0f5a71'}}>Debit Card</Text>
                  <Ionicons name="chevron-forward" size={30} color="#0f5a71" />
              </View>

              <View style={{width:'90%', backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between',
               borderRadius:15 , marginTop:17, padding:15}} >
                  <Text style={{fontWeight:'700', fontSize:20, color:'#0f5a71'}}>Mobile Banking</Text>
                  <Ionicons name="chevron-forward" size={30} color="#0f5a71" />
              </View>

              <View style={{flexDirection:'row', justifyContent:'space-between', width:'95%', marginTop:8,
              alignItems:'center'}}>
                <Text style={{fontWeight:'500', fontSize:20, color:'#0f5a71'}}>Send receipt to your mail</Text>
                <Entypo name="switch" size={35} color="green" />
              </View>

              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
                width:'65%', height:50, backgroundColor: '#fcce82', borderRadius:10, marginTop:12 }}>

                  <Text style={{fontSize:18, fontWeight: 'bold', color:'#efefef'}}> Pay Now </Text>
                  
              </TouchableOpacity>
              

            </View>
              
            

            
 

        </SafeAreaView>

  

  ); 
}

const styles = StyleSheet.create({

  main_cont:{
    flex:1,
    backgroundColor:'#f2f2f2',
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





