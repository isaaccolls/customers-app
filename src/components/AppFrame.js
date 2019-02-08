import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

// const AppFrame = props => {
const AppFrame = ({header, body, footer}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title="{header}"></AppHeader>
                <div>{body}</div>
                <div>Aplicacion simple de Ejemplo</div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;