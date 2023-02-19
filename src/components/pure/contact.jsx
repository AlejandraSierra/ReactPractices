import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ( { contact } ) => {
    return (
        <div>
            <p><strong>Nombre: { contact.name }</strong></p>
            <p><strong>Apellido: { contact.lastname } </strong></p>
            <p>Email: { contact.email } </p>
            <p>Estado: { contact.connectionStatus ? 'Contacto en línea' : 'Contacto no disponible' }  </p>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
