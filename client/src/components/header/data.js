import React from 'react';
import {Icon,Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const menuJson = [
    {
        "display": "Udayabhanu Panickar"
    },
    {
        "name": "home",
        "to": "/",
        "display": <Icon name = {"home"}/>
    },
    {
        "name": "About Me",
        "to": "/aboutme",
        "display": "About Me"
    },
    {
        "name": "Spiritual Writings",
        "to": "/spiritualwritings",
        "display": "Spiritual Writings"
    },
    {
        "name": "Historical Writings",
        "to": "/historicalwritings",
        "display": "Historical Writings"
    },
]

export const menuArray = menuJson.map((data,index) => {
    if (data.hasOwnProperty("name")){
        return <Menu.Item
        name = {data.name}
        as = {Link}
        to = {data.to}>
            {data.display}
        </Menu.Item>
    }
    else{
        return <Menu.Item header>{data.display}</Menu.Item>
    }
})