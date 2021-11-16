import React from 'react';
import classes from './List.module.css'; 

const List = (props) => {
    return <ul className={classes.List}>{props.children}</ul>
}

export default List;

