/**
 * Home
 */
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import firebase from '../../services/firebaseConnection';
import { useNavigation } from "@react-navigation/native";

export default function Home({ route }) {

  const navigation = useNavigation();

  async function logout() {
    await firebase.auth().signOut();

    alert('Deslogado com sucesso!');
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      <View style={styles.viewImagem}>
        <Image
          style={styles.imagem}
          source={require('../../img/firebase.png')}
        />

        <Text style={styles.titulo}>Bem vindo: {route.params?.user}</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={styles.botao} onPress={logout}>
          <Text style={styles.botaoTexto}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}