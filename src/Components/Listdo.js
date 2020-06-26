import React, { Component } from 'react'
import '../css/Listdo.css'

class Listdo extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    clicked = ()=>{
        console.log('quitar este elemento')
    }
    render(){
        return(
            <div className="List">
                
                <button 
                    className="btn border-0 flex-grow-1 text-left shadow-none"

                > 

                {this.props.todo} 
                    
                <span className="fa fa-trash btn btn-outline-danger border-0" onClick={this.clicked}></span>
                    
                </button>
            </div>
        )
    }
}

export default Listdo;