import React, { Component } from "react";

import { Button, Form, FormGroup, Input } from 'reactstrap';

import "./add-form.css";

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textName: '',
            textType: '',
            color: ''
        }
        this.onValueChangeName = this.onValueChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChangeType = this.onValueChangeType.bind(this);
        this.onValueChangeColor = this.onValueChangeColor.bind(this);
    }

    onValueChangeName(event) {
        this.setState({
            textName: event.target.value
        })
    }

    onValueChangeType(event) {
        this.setState({
            textType: event.target.value
        })
    }

    onValueChangeColor(event) {
        this.setState({
            color: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.textName, this.state.textType, this.state.color);
        this.setState({
            textName: '',
            textType: '',
            color: ''
        });
    }

    render() {
        return (

                <Form inline className="add-form"
                onSubmit={this.onSubmit}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input 
                        type="name"
                        name="name"
                        placeholder="Введите имя" 
                        onChange={this.onValueChangeName}
                        value={this.state.textName}/>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input
                        name="type" 
                        placeholder="Введите тип" 
                        onChange={this.onValueChangeType}
                        value={this.state.textType}/>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input  
                        type="color" 
                        placeholder="Введите цвет" 
                        onChange={this.onValueChangeColor}
                        value={this.state.color}/>
                    </FormGroup>

                    <Button>Добавить</Button>
                </Form>

        );
    }

}

