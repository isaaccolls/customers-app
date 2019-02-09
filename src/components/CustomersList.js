import React from 'react';
import PropTypes from 'prop-types'l

const CustomersList = ({ customers }) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map(c => >
                        <CustomerListItem
                            key={c.dni}
                            customer={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}>
                        </CustomerListItem>
                    )
                }
            </div>
        </div>
    );
};

CustomersList.PropTypes = {
    customers: propTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomersList;