import React, { Component } from "react";
import AppHeader from '../app-header/app-header';
import Table from "../table/table";
// import TableItem from "../table-item/table-item";
import AddForm from "../add-form/add-form";

import "./app.css";
// import EditForm from "../edit-form/edit-form";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Name', type: 'type', color: 'color', edit: false, id: 1},
                {name: 'Name', type: 'type', color: 'color', edit: false, id: 2},
                {name: 'Name', type: 'type', color: 'color', edit: false, id: 3}
            ]
        }
        this.maxId = 4;

        this.deleteItem = this.deleteItem.bind(this);
        this.addNameItem = this.addNameItem.bind(this);
        // this.editItem = this.editItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
                  
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addNameItem(firstField, secondField, thirdField) {
        const newItem = {
            name: firstField,
            type: secondField,
            color:  thirdField,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            localStorage.setItem(newItem, JSON.stringify(newItem))
            return {
                data: newArr
            }

 
        });
    }

    editItem(id) {
 
     window.confirm('Вы хотите отредактировать данные?');
  

    }


    render() {
        return (
            <div>
                <AppHeader/>
                <Table posts={this.state.data}
                      onDelete={this.deleteItem}
                       onEdit={this.editItem}
                      />
                <AddForm
                onAdd={this.addNameItem}/>
            </div>
        )
    }
}
