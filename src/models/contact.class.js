export class Contact {
    name = '';
    lastname = '';
    email = '';
    connectionStatus = false;

    constructor(name, lastname, email, connectionStatus) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.connectionStatus = connectionStatus;
    }
}