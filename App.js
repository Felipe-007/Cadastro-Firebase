/**
 * Desafio
 */
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  function cadastrar() {
    alert('ok')
  }

  return (
    <View style={styles.container}>

      <View style={styles.viewImagem}>
        <Image
          style={styles.imagem}
          source={require('./src/img/firebase.png')}
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
          placeholder="............."
        />

        <TouchableOpacity style={styles.botao} onPress={cadastrar}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={cadastrar} style={styles.redirecionar}>
          <Text style={styles.texto}>Clique aqui para realizar o login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}