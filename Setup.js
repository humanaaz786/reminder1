import React,{Component} from  'react';
import {Text,View,StyleSheet,SafeAreaView,Animated,Linking,Platform,StatusBar,Image,TouchableOpacity,Alert,Button,TextInput} from 'react-native';
import Constants from 'expo-constants';

import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Setup extends Component{
  state={
      hourr:'',
      minutes:'',
      secondss:'',
      };
   animatedValue = new Animated.Value(0);
  animatedSec = new Animated.Value(0);
  animatedScale = new Animated.Value(0);


componentDidMount(){
  this.addSetup();
   this.animation();
    const date = new Date();
    let seconds =
      +(date.getHours() * 60 * 60) + date.getMinutes() * 60 + date.getSeconds();
    setInterval(() => {
      seconds = seconds + 1;
      this.animatedSec.setValue(seconds);
    }, 1000);

}

 animation = () => {
    Animated.timing(this.animatedValue, {
      toValue: this.animatedSec,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

addSetup=()=>{
Alert.alert(
'Error',
'Please Press SUBMIT',
[{text:'ok',onPress:()=>console.log('button pressed..')}],
{cancellable:false}
)
}
  render(){
   
    const inputs = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const size = 200;

    const interpolate = {
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    };

    const sec = Animated.multiply(this.animatedValue, 6);
    const secInter= sec.interpolate(interpolate);

    const min = Animated.divide(sec, new Animated.Value(60));
    const minInter = min.interpolate(interpolate);

    const hour = Animated.divide(min, new Animated.Value(12));
    const hourInter= hour.interpolate(interpolate);
         return(
       <View style={styles.rtext}>
       <SafeAreaView style={styles.drawIt}/>
       <View style={styles.appTitle}>
       <View style={styles.appIcon}>
       <Image source={require('../10-101433_alarm-clock-png-download-png-image-with-transparent.png')}
       style={styles.iconImage}></Image>
       </View>
       <View style={styles.appTitleTextContainer}>
       <Text style={styles.appTitleText}>Reminder App</Text>
       </View>
       </View>  
       <View>
        <View style={styles.bg}>
          <View
            style={{
              position: 'absolute',
              left: 10,
              top: 10,
            }}>
            {inputs.map((item, index) => {
              const rotate = `${index * 30}deg`;
              return (
                <View
                  style={{
                    width: size,
                    height: size,
                    alignItems: 'center',
                    position: 'absolute',
                    transform: [
                      {
                        rotate,
                      },
                    ],
                  }}>
                  {/*<Text style={{ color: 'black' }}>{item}</Text>*/}
                  <View style={{width: 1.5, height: 10, backgroundColor: 'red'}}/>
                </View>
              );
            })}
            <Animated.View
              style={{
                width: size,
                height: size,
                alignItems: 'center',
                justifyContent: 'cener',
                position: 'absolute',
                transform: [
                  {
                    rotate: secInter,
                  },
                ],
              }}>
              <View
                style={{
                  width: 1,
                  height: size * 0.45,
                  backgroundColor: '#ff5b00',
                  marginTop: size * 0.05,
                }}
              />
            </Animated.View>
            <Animated.View
              style={{
                width: size,
                height: size,
                alignItems: 'center',
                justifyContent: 'cener',
                position: 'absolute',
                transform: [
                  {
                    rotate: minInter,
                  },
                ],
              }}>
              <View
                style={{
                  width: 2,
                  height: size * 0.45,
                  backgroundColor: 'black',
                  marginTop: size * 0.05,
                }}
              />
            </Animated.View>

            <Animated.View
              style={{
                width: size,
                height: size,
                alignItems: 'center',
                justifyContent: 'cener',
                position: 'absolute',
                transform: [
                  {
                    rotate: hourInter,
                  },
                ],
              }}>
              <View
                style={{
                  width: 2.5,
                  height: size * 0.3,
                  backgroundColor: 'black',
                  marginTop: size * 0.2,
                }}
              />
            </Animated.View>
          </View>
          <Animated.View
            style={[styles.bg, { transform: [{ scale: this.animatedScale }] }]}
          />
        </View>

       </View>
        <View style={styles.container}>
      <Text style={styles.paragraph}>
       Set Time
      </Text>
        <TextInput
          style={styles.input1}
          value={this.state.hourr}
          onChangeText={hourr=> this.setState({hourr})}
          ref={ref => {this._nameInput = ref}}
          placeholder="Hour"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
         <TextInput
          style={styles.input}
          value={this.state.minutes}
          onChangeText={minutes=> this.setState({minutes})}
          ref={ref => {this._nameInput = ref}}
          placeholder="Minutes"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
         <TextInput
          style={styles.input}
          value={this.state.seconds}
          onChangeText={secondss=> this.setState({secondss})}
          ref={ref => {this._nameInput = ref}}
          placeholder="Seconds"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
    </View>
       
      <View style={styles.button}>
                <Button
                  onPress={() => this.addSetup()}
                  title="Send Alert"
                  color ='black'
                />
              </View>
       </View>
        
   


     )
  }
}
const styles=StyleSheet.create({
  rtext:{
  flex:1, 
  },
  drawIt:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:RFValue(35),
  },
  appTitle:{
    flex:0.10,
    flexDirection:"row",
  },
  appIcon:{
    flex:0.25,
    justifyContent:'center',
    alignItems:"center",
    marginLeft:20,
  },
  iconImage:{
    width:'150%',
    height:'150%',
    resizeMode:"contain",
  },
  appTitleText:{
    color:"lime",
    fontSize:RFValue(28),
    
  },
  appTitleTextContainer:{
    flex:0.7,
    justifyContent:"center",
    marginTop:0,
  },
  button:{
    margin: 24,
   padding: 20,
   borderRadius: 15,
   borderWidth: 1,
   borderColor : 'transparent',
   fontWeight: 'bold',
   color:'#34495e',
   backgroundColor:'#ff6666',
   textAlign: 'center',
   marginTop: 150,
  },
  bg: {
    width: 220,
    height: 220,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 24.0,
    elevation: 24,
    marginTop:50,
    marginLeft:50,
  },
  container: {
    flex:0.3,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    marginLeft:10,
    marginTop:20,
  },
  paragraph: {
    marginTop:150,
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
   margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 19,
  },
  input1:{
   margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 19,
  }
})
