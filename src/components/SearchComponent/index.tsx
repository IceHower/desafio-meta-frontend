import { FiSearch } from 'react-icons/fi'

export function SearchComponent() {
    return(
        <div className="w-80 h-8 bg-gray-600 p-2 flex items-center rounded">
            <FiSearch size={18} />
            <input 
                className="w-full bg-transparent px-2" 
                type="text"
                placeholder="Pesquise um país"
            />
        </div>
    )
}