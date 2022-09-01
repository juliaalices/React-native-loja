import { StyleSheet } from 'react-native';
import Routes from './src/store/routes';

export default function App() {
  return (
    <Routes></Routes>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloDiv:{
    color: '#FE2E2ECC',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 0,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Marvel-Bold',
    lineWeight: 36,
},
  tituloProduto:{
    color: "rgba(254, 46, 46, 0.8)",
    lineWeight: 36,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 5,
    marginTop: 30,
  }
});
