import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactListComponent = () => {

    const contact1 = new Contact('Paula', 'Murcia', 'paulamurcia@gmail.com', false);
    const contact2 = new Contact('Nicolás', 'Bonilla', 'nicobonilla@gmail.com', false);
    const contact3 = new Contact('Iván', 'Murcia', 'ivanmurcia@gmail.com', true);
    const contact4 = new Contact('Yohanna', 'González', 'yohannagonzalez@gmail.com', true);

    //Estado del componente
    const [contacts, setContacts] = useState([contact1, contact2, contact3, contact4]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Contact state has been modified');
        setLoading(false);
        return () => {
            console.log('Contact list component is going to unmount...')
        };
    }, [contacts]);

    //Cambiar estado del contacto entre conectado y desconectado
    function contactStatus(contact){
        console.log('Contact status: ', contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].connectionStatus = !tempContact[index].connectionStatus;
        setContacts(tempContact);
    }

    function removeContact(contact){
        console.log('Remove this contact: ', contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index,1);
        setContacts(tempContact);
    }

    function addContact(contact){
        console.log('Create this contact; ', contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.push(contact);
        setContacts(tempContact);
    }


    return (
        <div>
            <div className='pt-5 pb-5 d-flex justify-content-center align-items-center flex-column'>
                <div className='col-6 p-4 rounded bg-white '>
                    <div className='text-center display-6 pb-3'>Mis contactos</div>
                    <div className='pt-3 d-flex justify-content-center'>
                    <table class="table">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col" className='text-center'>Contacto</th>
                                <th scope="col" className='text-center'>Email</th>
                                <th scope="col" className='text-center'>Estado</th>
                                <th scope="col" className='text-center'>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => {
                                return (
                                    <ContactComponent
                                        key = { index } 
                                        contact = { contact }
                                        status = { contactStatus }
                                        remove = { removeContact }
                                    >
                                    </ContactComponent>
                                )
                            })}
                        </tbody>
                        </table>
                    </div>
                    <div className='pt-4'>
                    <div className='text-center lead pb-3'>Contacto Nuevo</div>
                        <ContactForm add={addContact}></ContactForm>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ContactListComponent;
