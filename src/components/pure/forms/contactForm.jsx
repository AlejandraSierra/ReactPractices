import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const ContactForm = ( { add } ) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={ addContact } className='row g-3'>
            <div class="col-6">
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-sm' required autoFocus placeholder='Contact Name'/>
            </div>
            <div class="col-6">
                <input ref={lastnameRef} id='inputLastName' type='text' className='form-control form-control-sm' required placeholder='Contact Lastname'/>
            </div>
            <div class="col-12">
                <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-sm' required placeholder='Contact Email'/>
            </div>
            <div class="col-12 d-grid gap-2">
                <button type='submit' className='btn btn-dark'>Añadir contacto</button>
            </div>
        </form>
    );
}

ContactForm.ProtoTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;
