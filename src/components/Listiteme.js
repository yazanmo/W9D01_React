import React from 'react';


const ListItem = ({todo,id})=>{
    const handleLi = ()=>{
        console.log(id)
    }
    return(<>
        <li onClick= {handleLi}>{todo}</li>
        </>)
};

export default ListItem