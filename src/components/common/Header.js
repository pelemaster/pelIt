import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'

const Header = (props) => {
    const { textStyle, viewStyle, safeAreaStyle } = styles
    return (
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justyfyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, heidht: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    }
}

export  {Header}
