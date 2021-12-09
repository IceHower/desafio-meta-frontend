import { useQuery, gql } from "@apollo/client";
import { CountryCard } from "../../components/CountryCard";
import { SearchComponent } from "../../components/SearchComponent";
import { useEffect } from 'react';

interface CountryProps {
    _id: number;
    name: string;
    capital: string;
    flag: {
        svgFile: string;
    }
}


export function Home() {

    
    const { loading, error, data } = useQuery(gql`
    query CountryList {
        Country {
            _id,
            name,
            capital,
            flag {
                svgFile
            },
        }
    }
`);
    console.log(data)
    return(
        <main className="w-screen h-screen bg-gray-700 flex p-8">
            <div className="w-full flex flex-col">
                <SearchComponent />
                {data?.Country.map(({ _id, name, capital, flag }: CountryProps) => (
                    <CountryCard
                        key={_id}
                        _id={_id}
                        name={name}
                        capital={capital}
                        flag={flag.svgFile}
                    />
                ))}
                
            </div>
        </main>
    )
}