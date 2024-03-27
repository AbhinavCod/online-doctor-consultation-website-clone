import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchDoctor = () => {
  return (
    <div className="flex flex-row sm:flex-col md:w-full justify-evenly">
        <div>
            <input type='text' placeholder='Search by city...' className='outline-none bg-white rounded-md py-2 px-4 text-gray-700'></input>
        </div>
        <div>
            <input type='text' placeholder='Search by experience..' className='outline-none bg-white rounded-md py-2 px-4 text-gray-700'></input>
        </div>
        <div>
            <input type='text' placeholder='Search by profession...' className='outline-none bg-white rounded-md py-2 px-4 text-gray-700'></input>
        </div>
        <div>
            <button className="hover:text-xl"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    </div>
  )
}

export default SearchDoctor;