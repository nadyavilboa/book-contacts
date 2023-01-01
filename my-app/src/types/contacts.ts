export type Contact = {
    id: number,
    name: string,
    email: string,
    phone: string
};

export type Contacts = Contact[];

export type NewContact = {
    name: string,
    email: string,
    phone: string
};