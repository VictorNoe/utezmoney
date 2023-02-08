import {View, TextInput, StyleSheet} from "react-native";
import colors from '../utils/colors';
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props){
    //console.log(props);
    const {setCantidad, setPlazo, setInteres} = props;

    return(
        <View style={estilitos.viewForm}>
            <View style={estilitos.viewInputs}>
                <TextInput
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={estilitos.inputs}
                    onChange={(e)=>setCantidad(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[estilitos.inputs, {width:"40%", marginLeft: 5}]}
                    onChange={(e)=>setInteres(e.nativeEvent.text)}
                />
            </View>
            <View>
                <RNPickerSelect
                    style = {selectStyle}
                    placeholder={{
                        label: 'Selecciona los meses...',
                        value: null
                    }}
                    useNativeAndroidPickerStyle={false}
                    onValueChange={(value) => setPlazo(value)}
                    items={[
                        { label: '3 meses', value: '3' },
                        { label: '6 meses', value: '6' },
                        { label: '12 meses', value: '12' },
                        { label: '24 meses', value: '24'}
                    ]}
                />
            </View>
        </View>

    )
}

const estilitos = StyleSheet.create({
    viewForm:{
        bottom: 0,
        width: "85%",
        paddingHorizontal: 40,
        backgroundColor: colors.C_PRIMARIO_O,
        borderRadius: 30,
        height:200,
        justifyContent: "center",
        position:"absolute"
    },
    viewInputs:{
        flexDirection:"row"
    },
    inputs:{
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 5,
        width: "60%",
        marginLeft:-5,
        marginRight:4,
        color: "black",
        paddingLeft: 20,
        paddingRight: 20,
        height:50,
    }
});

const selectStyle = StyleSheet.create({
    inputAndroid:{
        backgroundColor:"#fff",
        marginTop: 10,
        fontSize: 16,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 6,
        paddingRight: 25,
        color:"black"
    },
    inputIOS:{
        backgroundColor:"#fff",
        marginTop: 10,
        fontSize: 16,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 6,
        paddingRight: 25,
        color:"black",
    }
})