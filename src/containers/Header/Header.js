import React from 'react'; 
import classes from './Header.module.css';
import machineImg from '../../assets/machine.png'; 

export default function Header() {

    return (
        <div className={` ${classes.Header} `}  >
            <img src={machineImg} alt="header" />
        </div>
    )
}
