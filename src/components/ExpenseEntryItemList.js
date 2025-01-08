/*import React from 'react';
import './ExpenseEntryItemList.css';
function ExpenseEntryItemList(props){
    const l=props.item.map((item)=>
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{new Date(item.spendDate).toDateString()}</td>
            <td>{item.category}</td>
        </tr>
    );
    return(
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {l}
            </tbody>
        </table>
    );
}
export default ExpenseEntryItemList;*/


/*import React from 'react';
import './ExpenseEntryItemList.css';
function ExpenseEntryItemList(props){
    function handleMouseEnter(e) {
        e.target.parentNode.classList.add("highlight");
    }
    function handleMouseLeave(e) {
        e.target.parentNode.classList.remove("highlight");
    }
    function handleMouseOver(e) {
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
    }
    const lists = props.item.map((item) =>
        <tr key={item.id} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{new Date(item.spendDate).toDateString()}</td>
            <td>{item.category}</td>
        </tr>
    );
    
    return (
            <table onMouseOver={handleMouseOver}>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
    );
}
export default ExpenseEntryItemList;*/

/*import React from 'react';
import './ExpenseEntryItemList.css';
class ExpenseEntryItemList extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind();
        this.handleMouseLeave = this.handleMouseLeave.bind();
        this.handleMouseOver = this.handleMouseOver.bind();
    }
    handleMouseEnter(e) {
        e.target.parentNode.classList.add("highlight");
    }
    handleMouseLeave(e) {
        e.target.parentNode.classList.remove("highlight");
    }
    handleMouseOver(e) {
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
    }
    render() {
        const lists = this.props.item.map((item) =>
            <tr key={item.id} onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{new Date(item.spendDate).toDateString()}</td>
                <td>{item.category}</td>
            </tr>
        );
    
        return (
            <table onMouseOver={this.handleMouseOver}>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
        );
    }
}
export default ExpenseEntryItemList;*/

import React from 'react';
import './ExpenseEntryItemList.css';
class ExpenseEntryItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
        this.handleMouseEnter = this.handleMouseEnter.bind();
        this.handleMouseLeave = this.handleMouseLeave.bind();
        this.handleMouseOver = this.handleMouseOver.bind();
    }
    handleMouseEnter(e) {
        e.target.parentNode.classList.add("highlight");
    }
    handleMouseLeave(e) {
        e.target.parentNode.classList.remove("highlight");
    }
    handleMouseOver(e) {
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
    }
    handleDelete = (id, e) => {
        e.preventDefault();
        console.log(id);
        
        this.setState((state, props) => {
            let items = [];
        
            state.items.forEach((item, idx) => {
                if(item.id != id)
                    items.push(item)
            })
            
            let newState = {
                items: items
            }
            return newState;
        })
    }
    getTotal() {
        let total = 0;
        for(var i = 0; i < this.state.items.length; i++) {
            total += this.state.items[i].amount
        }
        return total;
    }
    render() {
        const lists = this.state.items.map((item) =>
            <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{new Date(item.spendDate).toDateString()}</td>
                <td>{item.category}</td>
                <td><a href="#"
                onClick={(e) => this.handleDelete(item.id,
                e)}>Remove</a></td>
            </tr>
        );
    
        return (
            <table onMouseOver={this.handleMouseOver}>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                    <tr>
                        <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td>
                        <td colSpan="4" style={{ textAlign: "left" }}>
                            {this.getTotal()}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default ExpenseEntryItemList;

/*import React, { useState } from 'react';
import './ExpenseEntryItemList.css'
function ExpenseEntryItemListFn(props) {
    const [items, setItems] = useState(props.items);
    function handleMouseEnter(e) {
        e.target.parentNode.classList.add("highlight");
    }
    const handleMouseLeave = (e) => {
        e.target.parentNode.classList.remove("highlight");
    }
    function handleMouseOver(e) {
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
    }
    function handleDelete(id, e) {
        e.preventDefault();
        console.log(id);
        let newItems = [];
        items.forEach((item, idx) => {
            if (item.id != id)
            newItems.push(item)
        })
        setItems(newItems);
    }
    function getTotal() {
        let total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].amount
        }
        return total;
    }
    const lists = items.map((item) =>
        <tr key={item.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{new Date(item.spendDate).toDateString()}</td>
            <td>{item.category}</td>
            <td><a href="#" onClick={(e) => handleDelete(item.id, e)}>Remove</a></td>
        </tr>
    );
    return (
        <table onMouseOver={handleMouseOver}>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {items}
                <tr>
                    <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td>
                    <td colSpan="4" style={{ textAlign: "left" }}>{getTotal()}</td>
                </tr>
            </tbody>
        </table>
    );
}
export default ExpenseEntryItemListFn;*/

