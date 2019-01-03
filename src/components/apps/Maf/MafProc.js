import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { mafGetProc, mafGetBacklog } from '../../../actions/MafActions'
import ProcList from './procList'

class MafProc extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "MAF Processes",
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }

    render() {
        return (
            <ScrollView>
                <Card title='תהליכים'>
                    <ProcList data={this.props.maf.proc} />
                </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,{ mafGetProc, mafGetBacklog })(MafProc)