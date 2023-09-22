import React from 'react';

const CustomerTableBody = ({bodyData, onCustomerClick}) => {
    return (
        <tbody>
            {bodyData.map(data =>(
              <tr key={data.customerId} className="clickable" onClick={(e) => onCustomerClick(e, data.customerId)}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
              </tr>
            ))}
        </tbody>
    )
}

export default CustomerTableBody;