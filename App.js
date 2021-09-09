import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Pressable, onPress, Image, } from 'react-native';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      url: 'http://microtransaccion.herokuapp.com/rest/dataTrainee',
      nombre: null,
      cedula: null,
      tarjeta: null,
      f_v: null,
      cvv: null,
      banco: null,
      tipo: null,
    }
  }
  setData = () => {
    try {
        let config = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
              "id_banco":1,
              "id_proveedor":1,
              "nombre_cliente": this.state.nombre,
              "cedula_cliente": this.state.cedula,
              "numero_tarjeta": this.state.tarjeta,
              "fecha_caducidad": this.state.f_v,
              "codigo_ccv": this.state.cvv,
              "tipo_tarjeta": this.state.tipo,
              "total": 87.50,
              "estado": 0,
              "diferimiento": 3
            }
          )
        }
        fetch ('http://microtransaccion.herokuapp.com/rest/dataTrainee/', config)
        //let json = await res.json
        
        console.log(config)
    }
    catch (error){

    }
  }
  render(){
    return (
      

<SafeAreaView  style={styles.x}>
    <ScrollView contentInsetAdjustmentBehavior="automatic"
        style={styles.x}>
   <View style={styles.container}>
   <View style={styles.container2}>
   <Image source={require('./assets/logoSupermarket.png')} 
   style={{ width: 300, height: 80, alignContent: 'center', marginBottom: 20 }}
 />
   </View>

        <Text style={styles.title1}> Insert Credit/Debit Card </Text>

        <Text style={styles.title}>Carholder Name</Text>
        <TextInput
          style={styles.input}
          value = { this.state.nombre }
          onChangeText={ val => this.setState({ nombre: val })}
        />
        <Text style={styles.title}>Identification Card</Text>
        <TextInput
          style={styles.input}
          value = { this.state.cedula }
          onChangeText={ val => this.setState({ cedula: val })}
        />
        <Text style={styles.title}>Card Details</Text>
        <TextInput
          style={styles.input}
          value = { this.state.tarjeta }
          onChangeText={ val => this.setState({ tarjeta: val })}
        />
         <Text style={styles.title}>Date of Expiry</Text>
        <TextInput
          style={styles.input}
          value = { this.state.f_v }
          onChangeText={ val => this.setState({ f_v: val })}
        />
         <Text style={styles.title}>CVV</Text>
        <TextInput
          style={styles.input}
          value = { this.state.cvv }
          onChangeText={ val => this.setState({ cvv: val })}
        />
         <Text style={styles.title}>Banck</Text>
        <TextInput
          style={styles.input}
          value = { this.state.banco }
          onChangeText={ val => this.setState({ banco: val })}
        />
         <Text style={styles.title}>Credit/Debit</Text>
        <TextInput
          style={styles.input}
          value = { this.state.tipo }
          onChangeText={ val => this.setState({ tipo: val })}
        />

        <Text style={styles.title2}>SubTotal =   $78.5</Text>    
        <Text style={styles.title2}>iva =   $9.42</Text> 
        <Text style={styles.title2}>Total = $87.92</Text>   

        {/* <button onClick={this.setData.bind(this)}>Pay</button> */}


        <Pressable style={styles.button} onPress={this.setData.bind(this)}>
           <Text style={styles.text}>Pay $87.92</Text>
         </Pressable>
  
    </View>
    <Image source={require('./assets/logoSupermarket.png')} />
</ScrollView>

</SafeAreaView>


    );
  }  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  container2: {
    flex: 1,
    width: 200,
    height: 100,
    backgroundColor: '#fcfcfc',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title1: {
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  title2: {
    textAlign: 'right',
    color: '#252626',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  title: {
    color: '#252626',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#7f8c8d',
    color: '#252626',
    height: 40,
    fontSize: 16,
    width: '100%',
    marginBottom: 10,
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  x: {
    backgroundColor: '#fcfcfc',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#e4348b'
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },


});
export default App;