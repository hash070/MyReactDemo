import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import axios from 'axios';
import { React, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';


const LoginForm = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);

        axios.post('/api/login', values)
            .then(res => {
                console.log("登录成功");
                console.log(res.data);
                navigate('/home');
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login-wrap'>
            <div>
                <div className='form-header'>
                    <h4 className='column'>登录</h4>
                    <a href='/home'>账号注册</a>
                </div>
                <br />
                <br />

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入您的用户名!' }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码!' }]}>
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            忘记密码
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <a href="">注册</a>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

export default LoginForm;
