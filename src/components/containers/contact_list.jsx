import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('nombre', 'apellido', 'test@email.com', true);

    return (
        <div>
            <h2>Tus Contactos:</h2>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


ContactListComponent.propTypes = {

};


export default ContactListComponent;
