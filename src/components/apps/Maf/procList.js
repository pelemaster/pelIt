import React from 'react'
import { FlatList } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import customStyles from './customStyles'

class ProcList extends React.Component {
    renderProcItem = ({item}) => {
        styles = (item.actual_processes < item.from_up_processes) ?
             customStyles.errored : customStyles.normal
        
        return (
        <ListItem
            title={item.title}
            subtitle={ <Text style={{opacity:0.5}}>{item.system}</Text>}
            leftIcon={{
                name:'heartbeat',
                type:'font-awesome',
                color:styles.color
            }}
            badge={{
                value:item.actual_processes, 
                textStyle:{color:'#fff'},
                containerStyle: { marginTop: -5, backgroundColor:styles.color }
            }}
            containerStyle={{
                borderBottomColor: styles.color,
                borderBottomWidth: 1,
                marginBottom: 10
            }}
        />
        )
    }

    keyExtractor = (item,index) => index

    render() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.props.data}
                renderItem={this.renderProcItem}
            />
        )
    }
}

export default ProcList