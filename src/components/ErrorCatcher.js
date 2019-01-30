import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Icon, Text, Header, ThemeProvider } from 'react-native-elements'

class ErrorCatcher extends React.Component {
    render() {
        err = this.props.app.error
        if(err && err.hasOwnProperty('title')) {
            return (
                <ThemeProvider>
                <Header
                    leftComponent={{ icon: 'error', color: '#fff' }}
                    centerComponent={{ text: 'ERROR', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'error', color: '#fff' }}
                    containerStyle={{
                        backgroundColor: '#ff3333',
                        justifyContent: 'space-around',
                      }}
                />
                <Card 
                    title={err.title}
                    image={require('./accident.jpg')}>
                    <Text h4 style={{marginBottom: 10}}>
                        שלה לנו דיווח על התקלה
                    </Text>
                    <Button
                        icon={<Icon name='mail-outline' color='#ffffff' />}
                        
                        buttonStyle={{backgroundColor: '#ff3333', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Send report' />
                </Card>
                </ThemeProvider>
            )
        }

        return this.props.children
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,{})(ErrorCatcher)