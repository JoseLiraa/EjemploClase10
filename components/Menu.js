import React from 'react'
 
import { StyleSheet, Text , View  } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
 
export default class HomeScreen extends React.Component{
    render(  ){
        return(
            <View style={styles.container}>
                <Text style={{ color:"#674", fontSize:25, fontWeight:'bold'  }} >Maravillas del Mundo</Text>
                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"tajmahal"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Taj Mahal - India
                    </Text>
                </TouchableHighlight>
 
                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"granmuralla"
                }
                ) }
                >
                    <Text style={styles.textoBra} >
                        La Gran Muralla China
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"coliseo"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Coliseo Italia
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"critorendentor"
                }
                ) }
                >
                    <Text style={styles.textoBra} >
                        El Cristo Redentor-Brasil
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"chichenitza"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Chichen Itzá - México
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"petra"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Petra - Jordania
                    </Text>
                </TouchableHighlight>

                  <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"machupichu"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Machu Pichu - Perú
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
 
    botones:{
        height: 40,
        width:300,
        borderRadius:10,
        backgroundColor : "#abc",
        marginLeft :50,
        marginRight:50,
        marginTop :20,
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    texto:{
        color: "#fff",
        fontSize: 30
    },
     textoBra:{
        color: "#fff",
        fontSize: 20
    }
  });