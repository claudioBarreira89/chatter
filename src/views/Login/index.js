import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
// import {
//     Container, Header, Content, Button, Text
// } from 'native-base';
import { Button } from 'react-native-elements';

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView>
                <Button title="Solid Button" />
            </SafeAreaView>
            // <Container>
            //     <Header />
            //     <Content padder>
            //         <Button light><Text> Light </Text></Button>
            //         <Button primary><Text> Primary </Text></Button>
            //         <Button success><Text> Success </Text></Button>
            //         <Button info><Text> Info </Text></Button>
            //         <Button warning><Text> Warning </Text></Button>
            //         <Button danger><Text> Danger </Text></Button>
            //         <Button dark><Text> Dark </Text></Button>
            //     </Content>
            // </Container>
        );
    }
}
