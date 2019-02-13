import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';

console.log("Customer Container");
class CustomerContainer extends Component {

    render() {
        return (
            <div>
            <p>asdasdas</p>
                <AppFrame
                    header={'Cliente'}
                    body={<p>Datos del cliente</p>}
                >
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {

};

export default connect(null, null)(CustomerContainer);