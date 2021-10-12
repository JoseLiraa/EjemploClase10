import React from 'react'
 
import { StyleSheet  } from 'react-native';
import { WebView } from 'react-native-webview';
 
export default class WebScreen extends React.Component{
 
    sitio = this.props.navigation.getParam('sitio')
 
    lugares = {
        tajmahal:"https://www.google.com/maps/place/Taj+Mahal/@27.1744589,78.0413493,17.87z/data=!4m5!3m4!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422"
        ,
        granmuralla:"https://www.google.com/maps/place/Muralla+China/@40.4319118,116.5681862,17z/data=!3m1!4b1!4m5!3m4!1s0x35f121d7687f2ccf:0xd040259b950522df!8m2!3d40.4319077!4d116.5703749"
        ,
        coliseo:"https://www.google.com/maps/place/Coliseo+de+Roma/@41.8902142,12.4900422,17z/data=!3m1!4b1!4m5!3m4!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309"
        ,
        critorendentor:"https://www.google.com/maps/place/Cristo+Redentor/@-22.951916,-43.2104872,15z/data=!4m5!3m4!1s0x0:0x9dc984d7019502de!8m2!3d-22.951916!4d-43.2104872"
        ,
        chichenitza:"https://www.google.com/maps/place/Chich%C3%A9n+Itz%C3%A1/@20.6842849,-88.5677826,15z/data=!4m5!3m4!1s0x0:0x7c1ea0a168994d9a!8m2!3d20.6842849!4d-88.5677826"
        ,
        petra:"https://www.google.com/maps/place/Petra/@30.3284544,35.4443622,15z/data=!4m5!3m4!1s0x0:0x199bf908679a2291!8m2!3d30.3284544!4d35.4443622"
        ,
        machupichu:"https://www.google.com/maps/place/Machu+Picchu/@-13.1631412,-72.5449629,15z/data=!4m5!3m4!1s0x0:0x3a10370ea4a01a27!8m2!3d-13.1631412!4d-72.5449629"
    }
 
    
 
    render(){
        console.log(this["lugares"][this.sitio])
        return(
            
                <WebView style={styles.webSize} source={{ uri: this["lugares"][this.sitio] }}>
                    
                </WebView>
            
        )
    }
 
}
 
const styles = StyleSheet.create({  
    webSize:{
        width: "100%",
        height: "100%"
    }
  });
