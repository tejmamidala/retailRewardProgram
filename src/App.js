import React, { Component } from 'react';
import { getCustomerTransaction } from './services/data-service';
import { calculateRewardsPoints } from './services/points-service';
import Table from './components/Table';
import TableHeader from './components/TableHeader';
import CustomerTableBody from './components/CustomerTableBody';
import TransactionsTableBody from './components/TransactionsTableBody';
import ItemsTableBody from './components/ItemsTableBody';
import SelectedCustomerDetails from './components/SelectedCutomerDetails';
import './App.css';

class App extends Component {
  state = {
    customers: [],
    transactions: [],
    filteredTransactions: [],
    transactionItems: [],
    selectedCustomer: {},
    customerHeaderElements: [
      {title: 'First Name'},
      {title: 'Last Name'},
      {title: 'Email'}
    ],
    transactionsHeaderElements: [
      {title: "Id"},
      {title: "Date"},
      {title: "Total"},
      {title: "Points"},
      {title: "Details"}
    ],
    itemsHeaderElements: [
      {title: "Id"},
      {title: "Description"},
      {title: "Quantity"},
      {title: "Price"}
    ]
  }

  componentDidMount = () => {
    getCustomerTransaction()
    .then(data => this.setState({ customers: data.customers, transactions: data.transactions }))
    .catch(err => console.log(err))
  }

  handleClickOnCustomer = (e, customerId) => {
    e.preventDefault();
    const selectedCustomer = this.state.customers.find(customer => customer.customerId === customerId);
    const filteredTransactions = this.state.transactions.filter(transaction => transaction.customerId === customerId);
    const TransactionsWithPoints = calculateRewardsPoints(filteredTransactions);
    selectedCustomer.totalPoints = TransactionsWithPoints.totalPoints;
    this.setState({filteredTransactions: TransactionsWithPoints, selectedCustomer, transactionItems: []});
  }

  handleShowDetails = (e, transactionId) => {
    e.preventDefault();
    const stateCopy = this.state.filteredTransactions.find(filteredTransaction => filteredTransaction.transactionId === transactionId);
    const transactionItems = stateCopy.items;
    this.setState({transactionItems});
  }

  render(){
    const { 
      customers, 
      customerHeaderElements,
      filteredTransactions,
      itemsHeaderElements,
      transactionItems,
      transactionsHeaderElements,
      selectedCustomer
    } = this.state;

    return (
      <div className="container">
        <h2>Customers</h2>
        {!customers.length ? <p>No customers to be shown</p> : 
        <Table>
          <TableHeader headerElements={customerHeaderElements} />
          <CustomerTableBody bodyData={customers} onCustomerClick={this.handleClickOnCustomer} />
        </Table>}
        {! filteredTransactions.length ? <p>Click on a customer to display its transactions.</p>: 
          <div className="customerDetails">
            <h3>Transactions Summary</h3>
            <SelectedCustomerDetails selectedCustomer={selectedCustomer} />
            <div className="transactionTableSection">
              <Table>
                <TableHeader headerElements={transactionsHeaderElements} />
                <TransactionsTableBody bodyData={filteredTransactions} onShowDetails={this.handleShowDetails} />
              </Table> 
            </div>
            { transactionItems.length === 0 || 
            <div className="itemsTableSection">
              <Table>
                <TableHeader headerElements={itemsHeaderElements} />
                <ItemsTableBody dataBody={transactionItems} />
              </Table> 
            </div> }
          </div>
        }
      </div>
    );
  }
}

export default App;
