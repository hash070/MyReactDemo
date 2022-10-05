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

