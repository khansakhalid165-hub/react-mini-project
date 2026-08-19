export default function Search({ search, setSearch, handleSearch }) {
    return (
        <div className="flex w-full max-w-xl flex-col gap-3 rounded-2xl bg-white p-5 shadow-lg md:flex-row">
            <input
                type="text"
                className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-blue-500"
                placeholder="Enter city name"
                name="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button
                className="rounded-xl bg-pink-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                onClick={handleSearch}
            >
                Search weather
            </button>
        </div>
    )
}