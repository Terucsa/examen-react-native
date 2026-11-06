import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.tituloHeader}>Cine UMES</Text>
          <Text style={styles.subtituloHeader}>Reserva tu próxima función</Text>
          <StatusBar style="auto" />
        </View>

        <View style={styles.cardPelicula}>
          <Image
              source={require('./assets/images.jpeg')}
              style={styles.imagen}
          />
          <View style={styles.contenedorInfo}>
            <Text style={styles.tituloCard}>VINLAND SAGA</Text>
            <Text style={styles.texto}>Animación</Text>
            <Text style={styles.texto}>120 minutos</Text>
          </View>
        </View>

        <View style={styles.cardSeccion}>
          <Text style={styles.tituloSeccion}>Horarios</Text>
          <View style={styles.contenedorBotones}>
            <TouchableOpacity style={styles.boton}>
              <Text style={styles.textoBoton}>14:00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton}>
              <Text style={styles.textoBoton}>17:00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton}>
              <Text style={styles.textoBoton}>20:00</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardSeccion}>
          <Text style={styles.tituloSeccion}>Tipo de entrada</Text>
          <View style={styles.contenedorEntrada}>
            <View style={styles.cardEntrada}>
              <Text style={styles.texto}>Entrada</Text>
              <Text>Q34</Text>
            </View>
            <View style={styles.cardEntrada}>
              <Text style={styles.texto}>Entrada</Text>
              <Text>Q34</Text>
            </View>
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#f1f4f4',
  },

  // Navbar
  navbar: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  tituloHeader: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtituloHeader: {
    fontSize: 15,
    color: '#666',
  },

  // Card Película
  cardPelicula: {
    width: '90%',
    height: 140,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imagen: {
    width: '35%',
    height: '100%',
  },
  contenedorInfo: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  tituloCard: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  texto: {
    fontSize: 14,
    color: '#555',
  },

  cardSeccion: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  tituloSeccion: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  // Botones de horario
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boton: {
    width: '30%',
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#333',
    fontWeight: '500',
  },

  // Tipo entrada
  contenedorEntrada: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardEntrada: {
    backgroundColor: '#f8f2f2',
    width: '45%',
    height: '100%',
  }
});