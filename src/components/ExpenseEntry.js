// import React from 'react';
// import './ExpenseEntry.css';

// class ExpenseEntry extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <div>
//                 <div><b>Items:</b><em>{this.props.name}</em></div>
//                 <div><b>Amount:</b><em>{this.props.amount}</em></div>
//                 <div><b>Spend Date:</b><em>{this.props.spendDate.toString()}</em></div>
//                 <div><b>Category:</b> <em>{this.props.category}</em></div>
//             </div>
//         );
//     }
// }
// export default ExpenseEntry;

import React from 'react'
export default function ExpenseEntry(props) {
  return (
    
            <div>
                <div><b>Items:</b><em>{props.item.name}</em></div>
                <div><b>Amount:</b><em>{props.item.amount}</em></div>
                <div><b>Spend Date:</b><em>{props.item.spendDate.toString()}</em></div>
                <div><b>Category:</b> <em>{props.item.category}</em></div>
            </div>
  );
}


