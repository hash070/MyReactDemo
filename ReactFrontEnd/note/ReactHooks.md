# Hooks useState

简单示例

```jsx
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
```

在上面的例子中，首先使用`useState()`方法生成了一个state变量，然后将其赋值给了`name`，还把一个钩子函数给了`setName`

可以通过使用钩子函数来实现`name`的重新赋值与重新渲染

## 小案例：使用函数组件重写TodoList


```jsx
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
```

# Hooks useEffect

参考链接：https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html
useEffect()是通用的副效应钩子 。找不到对应的钩子时，就可以用它。其实，从名字也可以看出来，它跟副效应（side effect）直接相关。

## useEffect() 的用法

useEffect()本身是一个函数，由 React 框架提供，在函数组件内部调用即可。

举例来说，我们希望组件加载以后，网页标题（document.title）会随之改变。那么，改变网页标题这个操作，就是组件的副效应，必须通过useEffect()来实现。

```jsx
import React, { useEffect } from 'react';

function Welcome(props) {
  useEffect(() => {
    document.title = '加载完成';
  });
  return <h1>Hello, {props.name}</h1>;
}
```

上面例子中，useEffect()的参数是一个函数，它就是所要完成的副效应（改变网页标题）。组件加载以后，React 就会执行这个函数。

useEffect()的作用就是指定一个副效应函数，组件每渲染一次，该函数就自动执行一次。组件首次在网页 DOM 加载后，副效应函数也会执行。

## useEffect() 的第二个参数

有时候，我们不希望useEffect()每次渲染都执行，这时可以使用它的第二个参数，使用一个数组指定副效应函数的`依赖项`，只有`依赖项`发生`变化`，才会重新渲染。

```jsx
function Welcome(props) {
  useEffect(() => {
    document.title = `Hello, ${props.name}`;
  }, [props.name]);
  return <h1>Hello, {props.name}</h1>;
}
```

上面例子中，useEffect()的第二个参数是一个数组，指定了第一个参数（副效应函数）的依赖项（props.name）。只有该变量发生变化时，副效应函数才会执行。

如果第二个参数是一个空数组，这会让React认为该`副效应参数没有任何依赖项`。
那么，这个副效应函数只会在组件加载进入 DOM 后执行一次，后面组件重新渲染，就不会再次执行。
这很合理，由于副效应不依赖任何变量，所以那些变量无论怎么变，副效应函数的执行结果都不会改变，所以运行一次就够了。

## useEffect() 的用途
只要是副效应，都可以使用useEffect()引入。它的常见用途有下面几种。

* 获取数据（data fetching）
* 事件监听或订阅（setting up a subscription）
* 改变 DOM（changing the DOM）
* 输出日志（logging）

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
```

上面例子中，useState()用来生成一个状态变量（data），保存获取的数据；useEffect()的副效应函数内部有一个 async 函数，用来从服务器异步获取数据。

拿到数据以后，再用setData()触发组件的重新渲染。

由于获取数据只需要执行一次，所以上例的useEffect()的第二个参数为一个空数组。

## useEffect() 的返回值

副效应是随着组件加载而发生的，那么组件卸载时，可能需要清理这些副效应。

useEffect()允许返回一个函数，在组件卸载时，执行该函数，清理副效应。

如果不需要清理副效应，useEffect()就不用返回任何值。

```jsx
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    subscription.unsubscribe();
  };
}, [props.source]);
```

上面例子中，useEffect()在组件加载时订阅了一个事件，并且返回一个清理函数，在组件卸载时取消订阅。

实际使用中，由于副效应函数默认是每次渲染都会执行，所以清理函数不仅会在组件卸载时执行一次，每次副效应函数重新执行之前，也会执行一次，用来清理上一次渲染的副效应。

## useEffect() 的注意点

使用useEffect()时，有一点需要注意。如果有多个副效应，应该调用多个useEffect()，而不应该合并写在一起。
