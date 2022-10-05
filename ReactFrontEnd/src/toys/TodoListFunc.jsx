import React, {useState} from 'react';
import {Button, Checkbox, Input} from "antd";

//函数式TodoList
function TodoListFunc(props) {


    const [textList, setTextList] = useState([])
    /*
    const [textList, setTextList] = useState([
    {text:'1',id=1,isChecked=false},{...}])
     */

    let [text, setText] = useState("")
    let [listID, setID] = useState(1)

    let addItemToList = () => {

        let itemObj = {}

        itemObj.text = text;
        itemObj.id = listID + 1;
        itemObj.isChecked = false;

        setTextList([...textList, itemObj])
        setID(listID + 1)
    }

    return (
        <div>
            <Input value={text} onChange={(e) => {
                console.log(e.target.value)
                setText(e.target.value)
            }}></Input>
            <Button onClick={addItemToList}>添加</Button>

            <ul>
                {
                    textList.map((item, index) => (
                            <li key={item.id}>
                                <Checkbox checked={item.isChecked} onChange={() => {
                                    let tempList = [...textList]
                                    tempList.at(index).isChecked = !tempList.at(index).isChecked
                                    setTextList(tempList)
                                }}/>
                                {item.text}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}


export default TodoListFunc;