/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native';
//一些属性的意思，直接看单词就可以知道了就不用一一解释了

var { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,//相当于android布局的weight 充满容器
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        //设置次轴的对齐方式
        alignItems: 'center',
        padding: 20
    },
    circleImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 100,
        marginBottom: 25,
    },
    text: {
        fontSize: 24,
        color: '#ECEEF0'
    },
    textInput: {
        marginTop: 15,
        height: 40,
        width: width - 30,
        marginBottom: 5,
        backgroundColor: 'white',
        textAlign: 'left',
        borderBottomWidth: 1,
        borderBottomColor: '#ECEEF0'
    },
    btnStyle: {
        height: 40,
        width: width - 32,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#4398ff',
        //沿主轴方向居中
        justifyContent: 'center',
    },
    loginText: {
        //指定文本的对齐方式
        textAlign: 'center',
        color: 'white',
        //设置文本垂直方向居中
        textAlignVertical: 'center',
    },
    canNot: {
        width: width - 32,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        //设置主轴为两端对齐
        justifyContent: 'space-between',
    },
})

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            pwd: ""
        }
    }
    onPressButton() {
        Alert.alert(
            '提示',
            `账号:${this.state.name}\n密码:${this.state.pwd}`,
            [
                { text: '好', onPress: () => console.log('Ask me later pressed') }
            ],
            { cancelable: false }
        )
    }
    _inputChange(e) {
        this.setState({
            name: e
        })
        console.log(e)
    }
    _pwdChange(e) {
        this.setState({
            pwd: e
        })
    }
    render() {
        return (
            <>
                <View style={styles.container}>
                    {/* <Image style={styles.circleImage} source={require('../../image/timg.jpeg')} /> */}
                    <Text style={styles.text}>
                        励齿商城
                    </Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        value={this.state.name}
                        onChangeText={this._inputChange.bind(this)}
                        style={styles.textInput}
                        placeholder={'请输入手机号'}
                        //输入框下划线
                        underlineColorAndroid={'transparent'} />
                    <TextInput
                        underlineColorAndroid='transparent'
                        value={this.state.pwd}
                        style={styles.textInput}
                        onChangeText={this._pwdChange.bind(this)}
                        placeholder={'请输入密码'}
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'} />
                    <TouchableOpacity style={styles.btnStyle} onPress={this.onPressButton.bind(this)} >
                        <Text style={styles.loginText}>登录</Text>
                    </TouchableOpacity>
                    <View style={styles.canNot}>
                        <Text style={{ color: '#4398ff' }}>无法登录</Text>
                        <Text style={{ color: '#4398ff' }}>新用户</Text>
                    </View>
                </View>
            </>
        )
    }
}
export default Login;

