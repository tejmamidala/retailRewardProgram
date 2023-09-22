import React from 'react';

const TransactionsTableBody = ({bodyData, onShowDetails}) => {    
    return (
        <tbody>
            {bodyData.map(data =>(
                <tr key={data.transactionId}>
                <td>{data.transactionId}</td>
                <td>{data.transactionDate}</td>
                <td>${data.total}</td>
                <td>{data.points}</td>
                <td><a onClick={(e) => onShowDetails(e, data.transactionId)} href="">Show details</a></td>
                </tr>
            ))}
        </tbody>
    )
    
}

export default TransactionsTableBody