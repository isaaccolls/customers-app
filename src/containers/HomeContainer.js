import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        // <Link to="/customers">Listado de clientes</Link>
        console.log("handleOnClick started");
    }

    render() {
        return(
            <div>
                <AppFrame
                    header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                ></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default HomeContainer;