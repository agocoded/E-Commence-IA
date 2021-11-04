
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


export default function home({navigation}) {
  return (

       <View style={styles.main} >

            <View style={{width:'100%', backgroundColor:'#fff', marginBottom:5,
                height:'10%', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                }}>
            
            <TouchableOpacity >
            <Ionicons name="chevron-back" size={34} color="black" 
                onPress={() => navigation.push("afri", { name: "afri" })}
            />
            </TouchableOpacity>

            <Text style={{fontSize:26, fontWeight:'bold', color: '#08003d'}}>Home</Text>

            <TouchableOpacity style={{marginRight:18}}>
            <Ionicons name="fast-food-outline" size={35} color="black" />
            </TouchableOpacity>

            </View>

                
                {/* The midle compo */}

                <View style={styles.roller}>

                    <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>


                    {/* row 1 */}

                    <View style={styles.row}>

                        <View style={{width:'47%', height:'100%',  alignItems: 'center'}}>

                            <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                                source={require('../assets/noodles.jpg')} />
                                
                                <View style={{marginTop:-1,}}>
                                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                                <Text style={{color:'#5f5e5c', fontSize:18, marginLeft:-10}}>  160 places</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                        <View style={{width:'47%', height:'100%',  alignItems: 'center'}}>

                            <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                                source={require('../assets/noodles.jpg')} />
                                
                                <View style={{marginTop:-1,}}>
                                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                                <Text style={{color:'#5f5e5c', fontSize:18, marginLeft:-10}}>  160 places</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                    </View>


                    {/* row 2 */}

                    <View style={styles.row}>

                        <View style={{width:'47%', height:'100%',  alignItems: 'center'}}>

                            <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                                source={require('../assets/noodles.jpg')} />
                                
                                <View style={{marginTop:-1,}}>
                                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                                <Text style={{color:'#5f5e5c', fontSize:18, marginLeft:-10}}>  160 places</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                        <View style={{width:'47%', height:'100%',  alignItems: 'center'}}>

                            <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                                source={require('../assets/noodles.jpg')} />
                                
                                <View style={{marginTop:-1,}}>
                                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                                <Text style={{color:'#5f5e5c', fontSize:18, marginLeft:-10}}>  160 places</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                    </View>



                    {/* row 3 */}

                    <View style={styles.row}>

                        <View style={{width:'47%', height:'100%',  alignItems: 'center'}}>

                            <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                                source={require('../assets/noodles.jpg')} />
                                
                                <View style={{marginTop:-1,}}>
                                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                                <Text style={{color:'#5f5e5c', fontSize:18, marginLeft:-10}}>  160 places</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                        <View style={{width:'47%', height:'100%',  alignItems: 'center'}}>

                            <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                                source={require('../assets/noodles.jpg')} />
                                
                                <View style={{marginTop:-1,}}>
                                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                                <Text style={{color:'#5f5e5c', fontSize:18, marginLeft:-10}}>  160 places</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                    </View>


                    {/* row 4 */}

                    <View style={styles.row}>

                        <View style={{width:'47%', height:'100%',  alignItems: 'center'}}>

                            <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                                source={require('../assets/noodles.jpg')} />
                                
                                <View style={{marginTop:-1,}}>
                                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                                <Text style={{color:'#5f5e5c', fontSize:18, marginLeft:-10}}>  160 places</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                        <View style={{width:'47%', height:'100%',  alignItems: 'center'}}>

                            <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>

                                <Image style={{width:'100%', height:'75%', borderTopLeftRadius:10, borderTopRightRadius:10}}
                                source={require('../assets/noodles.jpg')} />
                                
                                <View style={{marginTop:-1,}}>
                                <Text style={{color:'#f9f9f9', fontSize:22,fontWeight: 'bold' }}>Desserts</Text>
                                <Text style={{color:'#5f5e5c', fontSize:18, marginLeft:-10}}>  160 places</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                    </View>

                    </ScrollView>
                    </SafeAreaView>

                </View>
            

            <View style={styles.tabs}>
              
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', }}
                onPress={() => navigation.push("Collections", { name: "Collections" })}>
                <Text style={{fontSize:18, fontWeight: 'bold'}}> LOG IN </Text>
                <Ionicons name="arrow-forward" size={24} color="black" />
              </TouchableOpacity>

            </View>

        
       </View>

  

  ); 
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: '#fcaf01',
    backgroundColor: '#262523',
  },

  container: {
    flex: 1,
  },

  scrollView: {
    backgroundColor: '#262523',
    width:'100%'
  },

  main_cont:{
    flex:1,
    backgroundColor: '#262523',
  },

  roller:{
   flex:1,
  },

  row:{
    flexDirection: "row",
    justifyContent: 'space-around',
    width:'100%',
    height: 220,
    marginBottom:5,
    

  },

  tabs:{
    width: '100%',
    height:'10%',
    position: 'relative',
    marginBottom:-15,
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:20,
    backgroundColor:'#fbf0e9', 
    flexDirection:'row', 

    
  
    
  },

  image: {
    flex: 1,
  },

  textinput:{
    height: 40,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth:1,
    marginBottom:20,
  },

  
});





