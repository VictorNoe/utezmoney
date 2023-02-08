import {View, TextInput, StyleSheet} from "react-native";
import colors from '../utils/colors';
import RNPickerSelect from 'react-native-picker-select';

export default function Form(){
    return(
        <View style={estilitos.viewForm}>
            <View style={estilitos.viewInputs}>
                <TextInput
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={estilitos.inputs}/>
                <TextInput
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[estilitos.inputs, {width:"40%", marginLeft: 5}]}/>
            </View>
            <View>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
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
        justifyContent: "center"
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