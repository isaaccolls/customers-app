import { FETCH_CUSTOMERS } from '../constants';
import { createAction } from 'redux-actions';

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

// export const fetchCustomers = () => ({ type: 'FETCH_CUSTOMERS', payload: null });
export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);