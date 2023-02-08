import React, {useState} from 'react';
import {StyleSheet, SafeAreaView , Text, View, StatusBar} from 'react-native';
import colors from './src/utils/colors';
import Form from "./src/components/form";
import BtnCalcular from "./src/components/BtnCalcular";

export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [interes, setInteres] = useState(null);
  const [plazo, setPlazo] = useState(null);

  const calcular = () => {
      console.log(`cant: ${cantidad}`);
      console.log(`int: ${interes}`);
      console.log(`plz: ${plazo}`);
  }
  return (
    <View>
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
        <View>
          <Text>Resultados </Text>
        </View>
        <BtnCalcular/>
    </View>
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
