import React, {Component} from 'react';
import ReactDOM from "react-dom/client";

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
    </div>
)