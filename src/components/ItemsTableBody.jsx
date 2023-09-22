import React from 'react';

const ItemsTableBody = ({dataBody}) => {
    return (
        <tbody>
            {dataBody.map(data => (
                <tr key={data.itemId}>
                    <td>{data.itemId}</td>
                    <td>{data.description}</td>
                    <td>{data.quantityPurchased}</td>
                    <td>${data.price}</td>
                </tr>
            ))}
        </tbody>
    )
}

export default ItemsTableBody;