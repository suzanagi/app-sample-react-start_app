import React, { Component } from 'react';

export default class Todo extends Component {

    // constructer Method
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: ''
        };
    }
    
    // onInput Method
    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    
    // addTodo Method
    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }
    
    // removeTodo Method
    removeTodo = (index) => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }
    
    // render Method
    render() {
        const { todos } = this.state;
        
        return (
            <body>
                <div>
                    <input type="text" onInput={this.onInput} />
                    <button　onClick={this.addTodo} > Register </button>
                    <ul>
                        {todos.map((todo, index) => 
                            <li key={index}>
                                {todo}
                                <button onClick={ () => { this.removeTodo(index) }}> Delete </button>
                            </li>
                        )}
                    </ul>
                </div>
            </body>
        );
    }
}

