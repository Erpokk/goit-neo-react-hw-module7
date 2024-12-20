import ContactList from './components/ContactList/ContactList.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'
import './App.css'
import { fetchContacts } from './redux/contactsOps.js';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { selectError, selectIsLoading } from './redux/selectors.js';



function App() {
 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList/>
    </div>
  )
}

export default App
