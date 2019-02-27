import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un numero"
);

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";
    }

    if (!values.dni) {
        error.dni = "El DNI es un campo obligatorio";
    }

    return error;
};

const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();

const toLower = value => value && value.toLowerCase();

const onlyGrow = (value, previousValue, values) => value && (!previousValue ? value : (value > previousValue ? value : previousValue));

class CustomerEdit extends Component {
    
    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }
    }

    renderField = ({input, meta, type, label, name, withFocus}) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                {...input}
                type={!type ? "text" : type}
                ref={withFocus && (txt => this.txt = txt)}
            />
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    );

    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div>
                <h2>Ediccion del cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        withFocus
                        name="name"
                        component={this.renderField}
                        label="Nombre"
                        parse={toUpper}
                        format={toLower}></Field>
                    <Field
                        name="dni"
                        component={this.renderField}
                        label="DNI"></Field>
                    <Field
                        name="age"
                        component={this.renderField}
                        type="number"
                        validate={isNumber}
                        label="Age"
                        parse={toNumber}
                        normalize={onlyGrow}></Field>
                    <CustomersActions>
                        <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                        <button type="button" onClick={onBack} disabled={submitting}>Cancelar</button>
                    </CustomersActions>
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderan los datos si continua"></Prompt>
                </form>
            </div>
        );
    }
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate
    }
    )(CustomerEdit);

// export default reduxForm({ form: 'CustomerEdit' })(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);
