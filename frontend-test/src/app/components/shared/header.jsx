import SearchBar from "./searchBar";

export default function Header(){
    return (
        <header>
            <div className="w-100vw h-20 flex justify-around gap-60 items-center border-solid border-2 border-b-neutral-300">
                <img
                    src='/images/delfos-icon.png'
                    alt="delfosim icon"
                    className='h-12'
                />
                <SearchBar />
            </div>
        </header>
    )
}