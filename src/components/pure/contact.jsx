import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ( { contact, status, remove } ) => {

    useEffect(() => {
        console.log('Created contact');
        return () => {
            console.log(`Contact: ${contact.name} is going to be unmounted`)
        };
    }, [contact]);

    //function that returns an icon depending on the contact's status
    function contactStatus(){
        if (contact.connectionStatus){
            return <i className='bi bi-circle-fill' style={ {color: 'green'} }></i>
        } else {
            return <i className='bi bi-circle-fill' style={ {color: 'gray'} }></i>
        }
    }

    return (
        <tr>
            <td className='text-center'>{ contact.name } { contact.lastname }</td>
            <td className='text-center'>{ contact.email }</td>
            <td className='text-center'>{ contactStatus() }</td>
            <td className='text-center'><i onClick={ ()=>remove(contact) } className='bi-trash cursor-pointer' style={ {color: 'tomato', paddingLeft: '4px' } }></i></td>
        </tr>          
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    status: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
