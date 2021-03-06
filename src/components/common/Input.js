import React from 'react'
import { TextInput, Text,View } from 'react-native'

const Input = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{props.label}</Text>
            <TextInput 
                secureTextEntry={props.secretField}
                style={ styles.inputStyle }
                onChangeText={props.onChangeText}
                value={props.value}
                autoCorrect={false}
                placeholder={props.placeholder}
            />
        </View>
    )
}

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex:2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex:1
    }
}

export { Input }