import React, { Component } from 'react';
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: '',
            // input: ''
        };
    }
    // onInput = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     });
    // }
    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name]
        });
        this.setState({
            name: ''
        });
    }
    removeTodo = (index) => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }
    updateValue = (e) => {
        // setInput(e.target.value);
        this.setState({
            name: e.target.value
        });
      };
    render() {
        const { todos } = this.state;

        return (<div>
            <input 
              data-testid="todo"
            type="text" 
            // onInput={this.onInput} 
            // placeholder="Enter" 
            value={this.state.name} 
            onChange={this.updateValue}
            />
            <button onClick={this.addTodo} data-testid="submit">登録</button>
            <ul>
                {todos.map((todo, index) =>
                    <li key={index}   >
                        タスク{index + 1}：
                        {todo}
                        <button data-testid="delete" onClick={() => { this.removeTodo(index) }}>削除</button>
                    </li>)}
            </ul>
        </div>);
    }
}
