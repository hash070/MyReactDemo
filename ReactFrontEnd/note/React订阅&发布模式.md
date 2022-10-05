# 订阅发布设计模式

```jsx
let bus ={
    list:[],
    subscribe(callback){
        console.log('订阅',callback)
        this.list.push(callback)
    },
    publish(){
        this.list.forEach(callback =>{
            callback&&callback()//如果有效，则执行回调
        })
    }
}

//订阅

bus.subscribe(()=>{
    console.log("Sub111")
})

bus.subscribe(()=>{
    console.log("Sub222")
})

//发布
setTimeout(()=>{
    bus.publish()
},1000)
```