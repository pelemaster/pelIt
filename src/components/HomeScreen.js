import React from 'react'
import {
    ScrollView, 
    View, 
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    Dimensions} from 'react-native';
import { connect } from 'react-redux'
import { getUserMenu } from '../actions/commonActions'

class HomeScreen extends React.Component {
    componentWillMount() {
        this.props.getUserMenu()
    }
    render() {
        return (
        <ScrollView>
            <View style={styles.container}>
            {
                apps.map((category, index) => {
                return (
                    <TouchableOpacity
                    key={index}
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate(category.goto)}
                    >
                    <Image
                        style={styles.itemIcon}
                        source={category.image}
                    />
                    <Text style={styles.itemTitle}>
                        {category.name}
                    </Text>
                    </TouchableOpacity>
                )
                })
            }
            </View>
        </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,{ getUserMenu })(HomeScreen)

const apps = [
    { name: "", image: require("./apps/Maf/mafLogo.png"), goto: "MAF" },
    { name: "", image: require("./apps/CC/cc.jpg"), goto: "CC" },
    { name: "", image: require("./apps/EAI/eai.png"), goto: "EAI" },
    { name: "", image: require("./apps/EAI/eai.png"), goto: "EAI" },
    { name: "", image: require("./apps/Maf/mafLogo.png"), goto: "MAF" },
    { name: "", image: require("./apps/CC/cc.jpg"), goto: "CC" },
]

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: Dimensions.get('window').width * 0.33,
        height: 100,
        borderWidth: 0,
        marginTop: 30,
        borderColor: "lightgray",
        alignItems: 'center',
        justifyContent: 'center'        
    },
    itemIcon: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    itemTitle: {
        marginTop: 16,
    },
})