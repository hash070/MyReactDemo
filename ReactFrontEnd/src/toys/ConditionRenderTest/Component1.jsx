import React, {Component} from 'react';

class Component1 extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                Component1
            </div>
        );
    }
}

Component1.defaultProps = {
    name: "Component1"
};

export default Component1;