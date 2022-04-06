import React from 'react';
import './App.css'

function Tweet(props){
    return(<div className = 'tweet'>
        <h3>{props.name}</h3>
        <p>{props.content}</p>
        <div><h4>Likes:</h4><p className={props.likes > 400 ? 'big_numbers' : ''}>{props.likes}</p></div>
    </div>)
}

export default Tweet;

// using className={Condition ? 'fancy_class' : ''} says if condition is met then add 'fancy_class', if it is not then do not add a class