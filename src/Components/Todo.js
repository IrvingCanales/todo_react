import React, { Component } from 'react'
import '../css/Todo.css'


class Todo extends Component{
    state = {
        todo:[],
        palabra:'',
    }

    deleteTodo = (task)=>{
        
        let arr = [];        
        arr = this.state.todo;
        arr = arr.filter(item => item !== task)        

        this.setState({todo: arr});
        
    }

    enterPress = (event)=>{
        if(event.key==='Enter'){              
            const task = event.target.value.trim();

            this.setState((prevState)=>{
                return {todo: [...prevState.todo, task]}
            })
            
            event.target.value='';
        }        
    }

    enterPalabra = (e)=>{
        const pal = e.target.value.trim();
        this.setState({palabra:pal})
    }
    render(){
        

        return (
            <div className="Todo">
                <h1>To-do list</h1>
            
                <div className="col-sm">
                    <input className="form-control" type="text" placeholder="Create a new to-do..." onKeyDown={this.enterPalabra} onKeyUp={this.enterPress} />
                </div>
                {this.state.palabra}
                {this.state.todo.map( (task,index) =>
                {
                    return (<ul key={index}>
                        <button 
                            className="btn border-0 flex-grow-1 text-left shadow-none "
                            key={index}
                        > 
    
                        {task} 
                            
                        <span 
                        className="fa fa-trash btn btn-outline-danger border-0" 
                        onClick={ () => {this.deleteTodo(task)} } 
                        key={index}></span>
                            
                        </button>
                    </ul>)
                })
                
                }

                
                
            </div>
        )
    }
}

export default Todo;