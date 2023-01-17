/**
 * Login
 */
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import firebase from '../../services/firebaseConnection';
import { useNavigation } from "@react-navigation/native";

export default function Login() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function entrar() {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) => {
        navigation.navigate('Home', { user: value.user.email })
        //Navegando usuario para Home e levando o email do usuario para a tela home

      })
      .catch((error) => {
        alert('Ops algo deu errado!');
        return;
        //Der algum erro mostrar o alert e barrar aqui.
      })

    setEmail('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewImagem}>
          <Image
            style={styles.imagem}
            source={require('../../img/firebase.png')}
          />

          <Text style={styles.titulo}>Login</Text>
        </View>


        <View style={styles.body}>
          <Text style={styles.texto}>Email</Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setEmail(texto)}
            value={email}
            placeholder="email@gmail.com"
          />

          <Text style={styles.texto}>Senha</Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setPassword(texto)}
            value={password}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.botao} onPress={entrar}>
            <Text style={styles.botaoTexto}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.redirecionar}>
            <Text style={styles.texto}>Clique aqui para realizar o cadastro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >
  )
}