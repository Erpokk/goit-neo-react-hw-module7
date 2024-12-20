
import { selectFilteredContacts } from '../../redux/selectors.js';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';





const ContactList = () => {    

    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.wrapper}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
};

export default ContactList;