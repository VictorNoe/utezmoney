import React, {useState} from 'react';
import {StyleSheet, SafeAreaView , Text, View, StatusBar} from 'react-native';
import colors from './src/utils/colors';
import Form from "./src/components/form";
import BtnCalcular from "./src/components/BtnCalcular";
import Results from "./src/components/results";

export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [interes, setInteres] = useState(null);
  const [plazo, setPlazo] = useState(null);
  const [prestamo, setPrestamo] = useState(null);
  const [error, setError] = useState("");

  const reset = () => {
      setError("");
      setPrestamo(null);
  }

  const calcular = () => {
      reset();
      if (!cantidad) {
          setError("Ingresa la cantidad");
      } else if (!interes) {
          setError("Ingresa el interes");
      } else if (!plazo) {
          setError("Ingresa el plazo");
      } else {
          const inte = interes/100;
          const pagos = cantidad / ((1-Math.pow(inte+1, -plazo))/inte);
          setPrestamo({
              pagoMes: pagos.toFixed(2),
              pagoTotal: (pagos*plazo).toFixed(2)
          })
          console.log(prestamo);
      }
  }

  return (
    <>
        <StatusBar style={'light-content'}/>
        <SafeAreaView style={styles.sefeArea}>
            <View style={styles.comodin}></View>
            <Text style={styles.titleApp}>UTEZ CASH</Text>
            <Form
                setCantidad={setCantidad}
                setInteres={setInteres}
                setPlazo={setPlazo}
            />
        </SafeAreaView>
        <Results
            errors = {error}
            cantidad = {cantidad}
            interes = {interes}
            plazos = {plazo}
            prestamos = {prestamo}
        />
        <BtnCalcular fnCalc={calcular}/>
    </>
  );
}

const styles = StyleSheet.create({
    comodin:{
        height: 220,
        width: "100%",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        backgroundColor:colors.C_PRIMARIO,
        position:"absolute",
        zIndex:-1
    },
    sefeArea:{
        height:290,
        alignItems: "center",
    },
    titleApp:{
        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
        marginTop:15
    }
});
