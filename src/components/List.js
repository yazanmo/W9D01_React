import React from 'react';
import ListItem from "./ListItem"

const List = (props)=>{
    return(<>
        <ul>
        <ListItem key={props.listTitle.id} todo={props.listTitle.todo} id={props.listTitle.id} />
        </ul>
        </>)
};

export default List