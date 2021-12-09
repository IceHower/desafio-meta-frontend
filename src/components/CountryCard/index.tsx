import { FiArrowRight } from 'react-icons/fi'
interface CountryCardProps {
    _id: number;
    name: string;
    flag: string;
    capital: string;
}

export function CountryCard({_id, name, flag, capital}: CountryCardProps) {
    return(
        <div className="shadow-md border border-gray-200 rounded-lg max-w-sm bg-gray-800 border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={flag} alt={name} />
            </a>
            <section className="p-5">
                <a href="#">
                    <h5 className="font-bold text-2xl tracking-tight mb-2 text-white">{name}</h5>
                </a>
                <p className="font-normal mb-3 text-gray-400">Capital: {capital}</p>
                <a href="#" className="font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                    Detalhes
                    <FiArrowRight size={16}/>
                </a>
            </section>
        </div>
    )
}