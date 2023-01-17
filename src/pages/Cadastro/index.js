/**
 * Cadastro
 */
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import firebase from '../../services/firebaseConnection';

export default function Cadastro() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value) => {
        navigation.navigate('Home', { user: value.user.email })
        //Navegando usuario para Home e levando o email do usuario para a tela home
      })
      .catch((error) => {
        alert('Ops algo deu errado!');
        console.log(error);
        return;
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

          <Text style={styles.titulo}>Cadastro</Text>
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

          <TouchableOpacity style={styles.botao} onPress={cadastrar}>
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.redirecionar}>
            <Text style={styles.texto}>Clique aqui para realizar o login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}