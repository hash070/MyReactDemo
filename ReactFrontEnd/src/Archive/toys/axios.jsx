import React, {Component} from 'react';
import axios from "axios";


class AxiosTemple extends Component {

    constructor(props) {
        super(props);

        //普通写法

        /*
        axios.get("http://localhost:8080/api/v1/temple")
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
         */

        //高级写法

        axios({
            method: "get",
            url: "http://localhost:8080/api/v1/temple",
            headers: {},
            body: {},
        })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AxiosTemple;