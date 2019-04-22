/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: "" };
    this.calcular = this.calcular.bind(this);
  }

  calcular() {

    let massa = this.state.massa;
    let altura = this.state.altura;

    let imc = massa / (altura * altura);

    let s = this.state;
    s.resultado = imc;
    this.setState(s);

    if(s.resultado < 17){
      s.resultadoText  ="Muito abaixo do peso";
    } else if(s.resultado >= 17 && s.resultado <= 18.49){
      s.resultadoText = "Abaixo do peso";
    }else if(s.resultado >= 18.5 && s.resultado <= 24.99){
      s.resultadoText = "Peso normal";
    }else if(s.resultado >= 25 && s.resultado <= 29.99){
      s.resultadoText = "Acima do peso";
    }else if(s.resultado >= 30 && s.resultado <= 34.99){
      s.resultadoText = "Obesidade I";
    }else if(s.resultado >= 35 && s.resultado <= 39.99){
      s.resultadoText = "Obesidade II (severa)";
    }else if(s.resultado >= 40 ){
      s.resultadoText = "Obesidade III (mórbida)";
    }


  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}} />
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}} />
        </View>

        <TouchableOpacity onPress={this.calcular} style={styles.button}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.texto}>IMC:</Text>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 30 }]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  entradas: {
    flexDirection: "row",
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 40,
    marginTop: 24,

  },
  button: {
    marginTop: 20,
    backgroundColor: "#89ffa5",
  },
  buttonText: {
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 30,


  },
  resultado: {
    alignSelf: 'center',
    color: "lightgray",
    fontSize: 55,
    padding: 15,

  },
  texto:{
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  }

});
