import React from "react";

import {ListGroup} from 'reactstrap';
import TableItem from "../table-item/table-item";
// import TableItem from "../table-item/table-item";

import "./table.css";

const Table = ({posts, onDelete, onEdit}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <TableItem
                {...itemProps}
                onDelete={() => onDelete(id)}
                onEdit={() => onEdit(id)}/>
            </li>
        )
    });
    
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )

}

export default Table;