/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Dimensions, StyleSheet, TouchableOpacity, Alert } from 'react-native';
var { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    safe: {
        flex: 1
    },
    container: {
        flexDirection: "column",
        padding: 15
    },
    closeBar: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    close: {
        width: 22,
        height: 22
    },
    title: {
        justifyContent: "space-between",
        padding: 18
    },
    hello: {
        fontWeight: "500",
        fontSize: 32,
        color: '#15171A',
        marginTop: 40
    },
    helloText: {
        fontSize: 15,
        color: '#5C6166',
        marginTop: 20
    },
    inputGroup: {
        paddingTop: 10,
        paddingLeft: 16,
        paddingRight: 16
    },
    textInput: {
        marginTop: 15,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'white',
        textAlign: 'left',
        borderBottomWidth: 0.74,
        borderBottomColor: '#ECEEF0'
    },
    btnStyle: {
        height: 44,
        marginTop: 60,
        borderRadius: 20,
        backgroundColor: '#F26D40',
        justifyContent: 'center',
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})

class Login extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            name: "",
            pwd: ""
        }
    }
    _inputChange(e) {
        this.setState({
            name: e
        })
    }
    _pwdChange(e) {
        this.setState({
            pwd: e
        })
    }
    onPressButton() {
        if (!this.state.name) {
            Alert.alert(
                '提示',
                `手机号有误`,
                [
                    { text: '好' }
                ],
                { cancelable: false }
            )
            return
        }
        if (!this.state.pwd) {
            Alert.alert(
                '提示',
                `密码有误`,
                [
                    { text: '好' }
                ],
                { cancelable: false }
            )
            return
        }
        Alert.alert(
            '登录成功',
            `账号:${this.state.name}\n密码:${this.state.pwd}`,
            [
                { text: '好', onPress: () => console.log('Ask me later pressed') }
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <>
                <SafeAreaView style={styles.safe}>
                    <View style={styles.container}>
                        <View style={styles.closeBar}  >
                            <Text style={{ color: '#4398ff' }}>
                                <Image style={styles.close} source={require('../../image/icon/icon_close.png')} ></Image>
                            </Text>
                            <Text style={{ color: '#DF541C' }}>{'验证码登录>>'} </Text>
                        </View>
                        <View style={styles.title}  >
                            <Text style={styles.hello}>
                                您好，
                            </Text>
                            <Text style={styles.helloText}>
                                欢迎来到励齿商城，立即  <Text style={{ color: '#DF541C' }}>注册</Text>
                            </Text>
                        </View>
                        <View style={styles.inputGroup}  >
                            <TextInput
                                value={this.state.name}
                                style={styles.textInput}
                                placeholder={'请输入手机号'}
                                underlineColorAndroid={'transparent'}
                                onChangeText={this._inputChange.bind(this)}
                            />
                            <TextInput
                                value={this.state.pwd}
                                style={styles.textInput}
                                placeholder={'请输入密码'}
                                secureTextEntry={true}
                                underlineColorAndroid={'transparent'}
                                onChangeText={this._pwdChange.bind(this)}
                            />

                            <TouchableOpacity style={styles.btnStyle} onPress={this.onPressButton.bind(this)} >
                                <Text style={styles.loginText}>登录</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </>
        )
    }
}
export default Login;

