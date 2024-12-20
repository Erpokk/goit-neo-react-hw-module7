import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css"
import Button from '../Button/Button.jsx'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";





const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    } 

    return (
        <li className={css.wrapper}> 
            <div className={css.infoWrapper}>
                <div className={css.info}>
                    <IoPersonSharp size="15"/>
                    <p className={css.name}>{contact.name}</p>
                </div>
                <div className={css.info}>
                    <FaPhoneAlt size="15" />
                    <p className={css.phone}>{contact.number}</p>
                </div>
            </div>
            <Button variation="del" id={contact.id} onClick={handleDelete} >Delete</Button>
        </li>
    )
}

export default Contact;