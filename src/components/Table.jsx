import React from 'react';

const Table = ({children}) => {
    return (
        <table className="table table-striped">
            {children}
        </table>
    )
}

export default Table;