
import React from 'react';
import { 
  ImageBackground, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,  } from 'react-native';

  import { Ionicons } from '@expo/vector-icons';
  import { AntDesign } from '@expo/vector-icons';
  import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Collections({navigation}) {
  return (
      

      <View style={styles.main_cont}>

        <View style={{width:'100%', marginBottom:5, backgroundColor:'#262523',
        height:'10%', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
         borderBottomLeftRadius:5, borderBottomRightRadius:5}}>
          
          <TouchableOpacity >
          <Ionicons name="chevron-back" size={34} color="#ff7433" 
            onPress={() => navigation.push("home", { name: "home" })}
          />
          </TouchableOpacity>

          <Text style={{fontSize:26, fontWeight:'bold', color: '#ff7433', }}>Restaurants</Text>

          <TouchableOpacity style={{marginRight:18}}>
          <Ionicons name="fast-food-outline" size={35} color="#ff7433" />
          </TouchableOpacity>

        </View>


          {/* what im doing here is to divide the screen into 3
           nav main_ads_ and botton tab */}

        <View style={styles.roller}>

          <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>


          <View style={styles.row2}>

            <View style={{width:'100%', alignItems: 'center'}}>

                <TouchableOpacity style={{width:'100%',  justifyContent:'center', alignItems:'center'}}
                    onPress={() => navigation.push("Collections", { name: "Collections" })}>

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

            </View>


            {/* first row */}
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

              {/* <View style={styles.row1}>

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

              </View> */}


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

          </View>



           {/* this view contains the tab */}

        <View style={styles.tabs}>
          <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row', 
            backgroundColor:'#ff7433', }}
            onPress={() => navigation.push("home", { name: "home" })}>
            <Ionicons name="ios-home-outline" size={35} color="#262523" />
          </TouchableOpacity>

          <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
            backgroundColor:'#ff7433' }}
            onPress={() => navigation.push("Collections", { name: "Collections" })}>
            <MaterialCommunityIcons name="food-fork-drink" size={39} color="#262523" />
          </TouchableOpacity>

          <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
            backgroundColor:'#ff7433'}}
            onPress={() => navigation.push("cart", { name: "cart" })}>
            <Ionicons name="cart-outline" size={39} color="#262523" />
          </TouchableOpacity>

          <TouchableOpacity style={{justifyContent:'center', alignItems:'center',flexDirection:'row',
            backgroundColor:'#ff7433'}}
            onPress={() => navigation.push("home", { name: "home" })}>
            <AntDesign name="profile" size={36} color="#262523" />
          </TouchableOpacity>
        </View>


      </View>
       

        

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    backgroundColor:'#262523', 
    width:'100%'
  },

  main_cont:{
    flex:1,
    // backgroundColor: '#fff',
    backgroundColor:'#262523', 
  },

  roller:{
   flex:1,
   backgroundColor:'#262523', 
  },

  row:{
    flexDirection: "row",
    justifyContent: 'space-around',
    backgroundColor:'#262523', 
    width:'100%',

  },

  row1:{
    flexDirection: "row",
    justifyContent: 'space-around',
    backgroundColor:'#262523', 
    width:'100%',
    marginTop:10,
  },

  row2:{
    flexDirection: "row",
    justifyContent: 'space-around',
    backgroundColor:'#262523', 
    width:'100%',
    marginBottom:10,

  },

 

  image:{
    width:'100%',
    height:180,
    justifyContent:'center',
    alignItems:'center',

  },

  tabs:{
    width: '100%',
    height:'10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ff7433',
    position: 'relative',
    borderRadius:7,
    

  },


});





