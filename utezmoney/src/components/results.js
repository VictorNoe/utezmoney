import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Results(props) {
    const { errors, cantidad, interes, plazos, prestamos } = props;
    return (
        <View style={styles.viewResults}>
            {prestamos &&(
                <View style={styles.viewResumen}>
                    <Text style={styles.titleResumen}>RESUMEN:</Text>
                    <Informacion Label="Cantidad a Pedir: " value={`$${cantidad}`}/>
                    <Informacion Label="Interes %: " value={`${interes}%`}/>
                    <Informacion Label="Plazos: " value={`${plazos} meses`}/>
                    <Informacion Label="Pago por Mes: " value={`$${prestamos.pagoMes}`}/>
                    <Informacion Label="Pago Total: " value={`$${prestamos.pagoTotal}`}/>
                </View>
            )}
            <View>
                <Text style={styles.errors}>{errors}</Text>
            </View>
        </View>
    )
}

function Informacion(props) {
    const {Label, value } = props;
    return(
        <View style={styles.info}>
            <Text>{Label}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewResults: {
        marginTop: 10,
        marginHorizontal: 40
    },
    errors: {
        color: "red",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    },
    viewResumen: {
        padding: 25
        },
    titleResumen: {
        fontSize: 25,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold"
    },
    info: {
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "space-between"
    }
})