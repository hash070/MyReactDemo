import React, {Component} from 'react';
import ReactDOM from "react-dom/client";

import Router from './Archive/RouterTest2/Router';

class Main extends Component {
    render() {
        return (
            <div>
                HelloWorld
            </div>
        );
    }
}

let root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
        <Main/>
        <Router/>
    </div>
)