import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    constructor(){
        super()
        this.spamArray = [];
    }

    render(){
        for (let i = 0; i < 500; i++) {
            this.spamArray.push(<Spam />)
        }
        return (
           <div id="ex-2">{this.spamArray}</div>
        );
    }
}




export default Spamalot

