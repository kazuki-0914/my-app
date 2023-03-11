import React, { Component } from 'react';

// const items = [{
//     id: 1,
//     userId: 1,
//     title: 'delectus aut autem',
//     completed: 'false'
// },
// {
//     id: 12,
//     userId: 12,
//     title: 'delectus aut autem2',
//     completed: 'false'
// }]



export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: [],
        };
    }
    componentDidMount = () => {
        // const records = [];
        // items.forEach((item) => {
        //     records.push(<tr key={item.id}>
        //         <td>{item.id}</td>
        //         <td>{item.userId}</td>
        //         <td>{item.title}</td>
        //         <td>{item.completed}</td>
        //     </tr>);
        // });
        // console.log(`records`, records);
        // this.setState({
        //     records: records
        // });


        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                const records = [];
                json.forEach((item) => {
                    records.push(<tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{item.completed}</td>
                    </tr>);
                });
                // console.log(`records`, records);
                this.setState({
                    records: records
                });
            })
    }

    render() {
        return (
            <div>

                <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                   </thead>
                   <tbody>
                    {/* 
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>delectus aut autem</td>
                        <td>false</td>
                    </tr>
                     */}
                    {this.state.records}
                    </tbody>
                </table>
            </div>
        );
    }
}
