import React from 'react';


class MyTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //该方法会在组件已经被渲染到 DOM 中后运行
    componentDidMount() {
        //为了让Clock动起来，我们在这里设置一个定时器
        //这里获取timerID是为了卸载组件时能清除定时器
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //该方法会在组件从 DOM 中被移除之前直接调用
    //在这里我们要清除定时器
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //我们自己定义的获取时间的方法，它在定时器中每秒被调用一次
    tick() {
        this.setState({
            date: new Date()
        });
        console.log(this.state.date.toLocaleTimeString());
    }

    render() {
        return (
            <div>
                <a>Hello, world!</a>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default MyTimer;