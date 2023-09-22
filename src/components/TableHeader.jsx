import React from 'react';

const TableHeader = ({headerElements}) => {
    return (
        <thead className="thead-dark">
            <tr>
                {headerElements.map( headerElement => (
                    <th key={ headerElement.title } scope="col">{ headerElement.title }</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader;