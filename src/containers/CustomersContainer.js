import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';

class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = () => (
        <div>
            <CustomersList
                customers={this.props.customers}
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
                    body={this.renderBody(this.props.customers)}
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: []
};

const mapStateToProps = state => ({
    customers: state.customers
});

// const mapDispatchToProps = dispatch => (
//     {
//         fetchCustomers: () => dispatch(fetchCustomers())
//     }
// )
// const mapDispatchToProps = { fetchCustomers };

// export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));
export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));