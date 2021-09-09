import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Pressable, Image, Picker, TouchableOpacity, } from 'react-native';
import { DataTable } from 'react-native';

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
      bank: 1,
      value1: 0,
      totalVal1: 0,
      value2: 0,
      totalVal2: 0,
      subT: 0,
      iva: 0,
      total: 0,

      
    }
  }
  setData = () => {
    try {
        let config = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
              "id_banco": this.state.bank,
              "id_proveedor":1,
              "nombre_cliente": this.state.nombre,
              "cedula_cliente": this.state.cedula,
              "numero_tarjeta": this.state.tarjeta,
              "fecha_caducidad": this.state.f_v,
              "codigo_ccv": this.state.cvv,
              "tipo_tarjeta": this.state.tipo,
              "total": 87.50,
              "estado": 0,
              "diferimiento": 3,
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


      {/* tabla */}



      
    <Text style={styles.title}>Canasta $19.99</Text>
        
    <View style={ styles.cont1 }>

    <View style={ styles.cont2 }>

      <TouchableOpacity 
        style={ styles.cont3 }>

        <Text style={styles.cont4} >-</Text>

      </TouchableOpacity>  

      <View style={styles.cont5}>
      <Text style={styles.contador} >0</Text>
      </View>

      <TouchableOpacity style={ styles.cont3 }>
        <Text style={styles.cont4} >+</Text>
      </TouchableOpacity>

    </View>

     
    </View>


        {/* <Pressable style={styles.button2} onPress={this.setData.bind(this)}>
           <Text style={styles.text}>-</Text>
         </Pressable>
         <Text style={styles.title1}>x</Text>
         <Pressable style={styles.button2} onPress={this.setData.bind(this)}>
           <Text style={styles.text}>+</Text>
         </Pressable> */}


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
      <Text style={styles.title}>
          {
            "Bank:"
          }
        </Text>
        <Picker style={styles.input} onValueChange={(itemValue, itemIndex) => this.setState({bank: itemValue})}>
            <Picker.Item label="Banco Pichincha" value= { 1 } />
            <Picker.Item label="Banco Guayaquil" value= { 2 } />
            <Picker.Item label="BanEcuador" value= { 3 } />
        </Picker>


        
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
    fontSize: 18,
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
  button2: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
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

  cont1: {
     justifyContent: 'center',
      flex: 1,
     
  },
  cont2: {
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row"
},
cont3: {
  height: 50,
  width: 70, 
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: '#e4348b'
  
},
cont4: {
  marginTop: -5,
  color: "#fff",
  fontWeight: 'bold',
  fontSize: 28,
  alignItems: 'center',
  justifyContent: 'center',
  
},
cont5: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
contador: {
  color: "black",
  fontSize: 26,
  fontWeight: 'bold',
},



});
export default App;