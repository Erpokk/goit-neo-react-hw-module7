
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";



const SearchBox = () => {
    
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const showFilteredContacts = e => {
        dispatch(changeFilter(e.target.value));
  };

    return (
        <div>
            <p>Search by name</p>
            <input type="text" value={filter} onChange={showFilteredContacts} />
        </div>
    )
        
};

export default SearchBox;