import "./SearchBar.css"
import { FaSearch } from 'react-icons/fa';

export default function SearchBar () {

    


    return (
    <div>
        <div className="input-group p-2 Search ">
            <input className="text-light" type="search" placeholder="Search item, collection, Artist"/>
            <button><FaSearch/></button>
        </div>
    </div>
    )
}