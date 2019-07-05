import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

const images = [
    require('./assets/1.png'),
    require('./assets/2.png'),
    require('./assets/3.png'),
    require('./assets/4.png'),
    require('./assets/5.png'),
];

export default class MarcadorTruco extends Component {
    constructor(props){
        super(props);

        this.state = {
            nos: 0,
            eles: 0,

            pontosNos: (<View></View>),
            pontosEles: (<View></View>),
        }
    }

    addPonto(nosEles, qtd){
        let s = this.state;

        if(nosEles === 'nos'){
            if(s.nos + qtd > 30) return;
            s.nos += qtd;
            
            s.pontosNos = this.contaPontos(s.nos);
        }
        else if(nosEles === 'eles'){
            if(s.eles + qtd > 30) return;
            s.eles += qtd;

            s.pontosEles = this.contaPontos(s.eles);
        }

        this.setState(s);
    }

    contaPontos(pontos){
        let resto = pontos;

        let ret = [];
        let fors = pontos / 5;

        if(pontos % 5 != 0) fors++;
        fors = Math.trunc(fors);

        for(let i = 0; i < fors; i++){
            let nImg = 5;
            if(resto > 5){
                nImg = 5;
                resto -= 5;
            }
            else{
                nImg = resto;
            }

            ret.push(
                <View key = {i}>
                    <Image
                        source={images[nImg - 1]}
                        style={styles.img}
                    />
                </View>
            );
        }

        return ret;
    }

    render(){
        return(
            <ImageBackground source={require('./assets/bg.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View style={styles.marcador}>
                        <View style={styles.lado}>
                            <Text style={styles.text}>Nós</Text>

                            <View style={styles.pontos}>
                                {this.state.pontosNos}
                            </View>

                            <View style={styles.botoes}>
                                <TouchableOpacity
                                    onPress={() => {this.addPonto('nos', 1)}}
                                >
                                    <View style={styles.btn}>
                                        <Text style={styles.btnText}>+</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.addPonto('nos', -1)}
                                >
                                    <View style={styles.btn}>
                                        <Text style={styles.btnText}>-</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.lado}>
                            <Text style={styles.text}>Eles</Text>

                            <View style={styles.pontos}>
                                {this.state.pontosEles}
                            </View>

                            <View style={styles.botoes}>
                                <TouchableOpacity
                                    onPress={() => this.addPonto('eles', 1)}
                                >
                                    <View style={styles.btn}>
                                        <Text style={styles.btnText}>+</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.addPonto('eles', -1)}
                                >
                                    <View style={styles.btn}>
                                        <Text style={styles.btnText}>-</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                
            </ImageBackground>
        );
    }
}

const imgSize = (Dimensions.get('window').height - 250) / 5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
    },

    marcador: {
        flex: 1,
        flexDirection: 'row',
    },

    text: {
        color: 'white',

        fontFamily: 'sans-serif-light',
        fontSize: 19
    },

    lado: {

        width: '50%',
        alignItems: 'center',
    },

    pontos: {
        width: '20%',

        alignItems: 'center',
    },

    img: {
        width: (imgSize),
        height: (imgSize),
    },

    botoes: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',

        marginBottom: 25,
    },

    btn: {
        borderRadius: 50,

        backgroundColor: '#303030',

        width: 43,
        height: 43,

        alignItems: 'center',
        justifyContent: 'center',
    },

    btnText: {
        marginTop: -5.5,

        color: 'white',

        fontFamily: 'sans-serif-light',
        fontSize: 50,
    }
});