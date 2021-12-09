import { CountryCard } from "../../components/CountryCard";
import { SearchComponent } from "../../components/SearchComponent";


export function Home() {
    return(
        <main className="w-screen h-screen bg-gray-700 flex p-8">
            <div className="w-full flex flex-col">
                <SearchComponent />
                <CountryCard />
            </div>
        </main>
    )
}