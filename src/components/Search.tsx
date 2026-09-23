function Search() {
    return (
        <div className="w-full mx-auto max-w-lg mt-6 mb-2">
            <input placeholder="Search characters..."
                className="border border-[#30363d] rounded-lg text-[#e6edf3] placeholder:text-[#8b949e]
                outline-none py-2.5 px-4 bg-[#161b22] mx-auto w-full
                transition duration-200 focus:ring-2 focus:-translate-y-1"
                type="text" />
        </div>
    )
}

export default Search