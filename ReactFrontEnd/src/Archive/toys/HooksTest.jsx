import React, {useState} from 'react';
import {Button} from "antd";

function HooksTest(props) {

    let [name,setName] = useState("Init name")

    return (
        <div>
            Hello {name}
            <Button onClick={()=>{
                setName("Name changed")
            }}>ChangeName</Button>
        </div>

    );
}

export default HooksTest;