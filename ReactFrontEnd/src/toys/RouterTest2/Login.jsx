import React, {Component} from 'react';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

class Login extends Component {

    navigate=useNavigate();

    render() {
        return (
            <div>
                登录界面
                <Button onClick={()=>{
                    localStorage.setItem('login',true)
                    //navigator.push('/')
                    this.navigate('/')
                }}>
                    登录
                </Button>
            </div>
        );
    }
}

export default Login;