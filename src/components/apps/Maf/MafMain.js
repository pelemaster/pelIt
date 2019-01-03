import React from 'react'
import { View } from 'react-native'
import { 
    Card, 
    Button, 
    Text, 
    Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import { mafGetProc, mafGetBacklog } from '../../../actions/MafActions'
import ProcList from './procList'

class MafMain extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "MAF",
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }

    componentWillMount() {
        this.props.mafGetProc()
        this.props.mafGetBacklog()
    }


    renderProcs() {
        let downProcesses =[]
        let message = 'כל התהליכים פעילים'
        let styleText = {color: '#0f0'}

        this.props.maf.proc.map(proc => {
            if(proc.actual_processes < proc.from_up_processes) {
                downProcesses = [...downProcesses, proc]
            }
        })
            if(downProcesses.length) {
                message = 'תהליכים הבאים לא פעילים'
                styleText={...styleText, color: '#f00'}
            }
            return (
                <View>
                    <Text h4 style={styleText}>{message}</Text>
                    <Divider style={{backgroundColor: 'blue'}} />
                    <ProcList data={downProcesses} />
                </View>
            )
    }

    render() {
        return (
            <Card title='תהליכים'>
                { this.renderProcs() }
                <Button
                    onPress={() => this.props.navigation.navigate('MafProc')}
                    title= 'רשימת תהליכים'
                />
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,{ mafGetProc, mafGetBacklog })(MafMain)