import React from 'react'
import classes from './MenuList.module.css';
import Card from '../../components/Card/Card';

const randomImg = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export default function MenuList() {
    return (
        <div className={`${classes.MenuList}    `}>
            <Card image={randomImg} />
            <Card image={randomImg} />
            <Card image = {randomImg} />
            <Card image = {randomImg} />
            <Card image = {randomImg} />
            <Card image = {randomImg} />
            <Card image = {randomImg} />
            <Card image = {randomImg} />
            <Card image = {randomImg} />
            <Card image = {randomImg} />
            <Card image = {randomImg} />
        </div>
    );
}
