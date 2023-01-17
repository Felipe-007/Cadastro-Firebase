import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  viewImagem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    textAlign: 'center',
    marginTop: 44,
  },
  body: {
    padding: 18,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#FFFFFF',
  },
  texto: {
    color: '#FFFFFF'
  },
  input: {
    backgroundColor: '#FFFFFF',
    fontSize: 18,
    height: 48,
    marginBottom: 5,
    borderRadius: 6,
    marginTop: 10,
    paddingLeft: 19,
    marginBottom: 15,
  },
  botao: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF4130',
    marginTop: 6,
    borderRadius: 6,
  },
  botaoTexto: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  redirecionar: {
    marginTop: 21,
    alignItems: 'center'
  },
})