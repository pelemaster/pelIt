import React from 'react'
import { View, Text } from 'react-native'
import { CcGetEnv } from './CcActions'
import { connect } from 'react-redux'

class CcMain extends React.Component {
    componentDidMount() {
        this.props.CcGetEnv()
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>CCScreen</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,{ CcGetEnv })(CcMain)