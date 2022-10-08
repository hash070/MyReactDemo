import React from 'react';
import { Outlet } from 'react-router';

function HelloWorld2(props) {
    return (
        <div>
            HelloWorld2
            <Outlet/>
        </div>
    );
}



export default HelloWorld2;