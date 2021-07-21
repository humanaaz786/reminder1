import React,{Component} from  'react';
import {Text,View,StyleSheet,SafeAreaView,Platform,StatusBar,Image,TouchableOpacity,Alert,Button} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';
export default class reminders extends Component{
  constructor(){
    super();
    this.state={currentTime:null,currentDay:null}
    this.daysArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  }
 componentWillmount() {
    this.getCurrentTime();
  }
  getCurrentTime=()=>{
    let hour=new Date().getHours();
    let minutes=new Date().getMinutes();
    let seconds=new Date().getSeconds();
    let am_pm='pm';
    if(minutes <10){
      minutes='0'+ minutes;
    }
    if(seconds <10){
      seconds='0'+ seconds;
    }
    if(hour> 12){
      hour=hour - 12;
    }
     if(hour===0){
      hour=12;
    }
     if(new Date().getHours() < 12){
      am_pm='am'
    }
    this.setState({
      currentTime:hour+':'+ minutes + ':'+ seconds + ' ' + am_pm
    });
    this.daysArray.map((item,key)=>{
      if(key== new Date().getDay()){
        this.setState({currentDay:item.toUpperCase()})
      }
    })
  }
  componentWillUnmount(){
    clearInterval(this.timer)

  }
  componentDidMount(){
    this.timer=setInterval(()=>{this.getCurrentTime();},1000
    )
    this.showAlert();
  }
  showAlert = () => {
   Alert.alert(
        "Error",
        "Please send an alert!",
        [{ text: "OK", onPress: () => console.log("Alert Sent!") }],
        { cancelable: false }
      );
  }
  render(){
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
       
       <Text style={styles.daysText}>{this.state.currentDay}</Text>
       <Text style={styles.timeText}>{this.state.currentTime}</Text>

       </View>
        <View style={styles.button}>
                <Button
                  onPress={() => this.addStory()}
                  title="Submit"
                  color="black"
                  
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
    flex:0.3,
    justifyContent:'center',
    alignItems:"center",
  },
  iconImage:{
    width:'130%',
    height:'130%',
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
  daysText:{
    color: 'lime',
    fontSize: 25,
    paddingBottom: 0,
    marginLeft: 150,
    marginTop: 100,
  },
  timeText:{
    fontSize: 50,
    color: 'gray',
    marginLeft: 20,
  },
  button:{
    margin: 24,
   padding: 30,
   borderRadius: 15,
   borderWidth: 1,
   borderColor : 'transparent',
   fontWeight: 'bold',
   color:'#34495e',
   backgroundColor:'#ff6666',
   textAlign: 'center',
   marginTop: 200,
  },
})
