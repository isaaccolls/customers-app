import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        "dni" : "420000",
        "name": "Bob Marley",
        "age": 37,
    },
    {
        "dni" : "421000",
        "name": "Kurt Cobain",
        "age": 46,
    },
    {
        "dni" : "422000",
        "name": "Janis Joplin",
        "age": 21,
    },
];

class CustomersContainer extends Component {

    renderBody = () => (
        <div>
            <CustomersList
                customers={customers}
                urlPath={'customer/'}
            ></CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default CustomersContainer;