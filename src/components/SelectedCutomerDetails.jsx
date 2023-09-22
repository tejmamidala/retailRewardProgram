import React from 'react';

const SelectedCustomerDetails = ({selectedCustomer}) => {
    return (
        <div className="detailsData">
              <div className="dataColumn">
                <div className="label">First Name:</div>
                <div className="data">{selectedCustomer.firstName}</div>
                <div className="label">Last Name:</div>
                <div className="data">{selectedCustomer.lastName}</div>
              </div>
              <div className="dataColumn">
                <div className="label">Email:</div>
                <div className="data">{selectedCustomer.email}</div>
                <div className="label">Phone:</div>
                <div className="data">{selectedCustomer.phone}</div>
              </div>
              <div className="dataColumn">
                <div className="label">Total Points: </div>
                <div className="data">{selectedCustomer.totalPoints}</div>
              </div>
            </div>
    );
}

export default SelectedCustomerDetails;