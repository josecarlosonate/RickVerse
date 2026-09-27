type FiltersProps = {
    value: string,
    onChange: (value: string) => void
    statusValue: string,
    onStatusChange: (value: string) => void
    genderValue: string,
    onGenderChange: (value: string) => void
    showFavorites: Boolean
    toggleFavorites: () => void
}

function Filters(props: FiltersProps) {
    return (
        <div className="w-full mx-auto max-w-lg mt-6 mb-2 flex flex-col gap-3">
            <div className="flex items-center gap-2 w-full">
                <input value={props.value} onChange={(e) => props.onChange(e.target.value)}
                    placeholder="Search characters..."
                    className="border border-[#30363d] rounded-lg text-[#e6edf3] placeholder:text-[#8b949e]
                    outline-none py-2.5 px-4 bg-[#161b22] w-full transition duration-200 focus:ring-2 focus:-translate-y-1"
                    type="text" />
                <button type="button" onClick={props.toggleFavorites}
                    title={props.showFavorites ? "Show all" : "Show favorites"}
                    className={`p-2.5 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0
                        ${props.showFavorites ? "border-[#e3b341] bg-[#161b22] text-[#e3b341]"
                            : "border-[#30363d] bg-[#161b22] text-[#8b949e] hover:text-[#e3b341] hover:border-[#e3b341]"}`}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className={`w-5 h-5 ${props.showFavorites ? "fill-[#e3b341]" : "fill-transparent"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 
                                0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 
                                0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 
                                0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </button>
            </div>

            <div className="flex gap-2 w-full">
                <select
                    value={props.statusValue}
                    onChange={(e) => props.onStatusChange(e.target.value)}
                    className="flex-1 bg-transparent border-0 border-b border-[#3fb950] text-[#e6edf3] outline-none py-2.5 
                    px-4 cursor-pointer text-sm"
                >
                    <option value="all" className="bg-[#161b22]">All Status</option>
                    <option value="alive" className="bg-[#161b22]">Alive</option>
                    <option value="dead" className="bg-[#161b22]">Dead</option>
                    <option value="unknown" className="bg-[#161b22]">Unknown</option>
                </select>
                <select
                    value={props.genderValue}
                    onChange={(e) => props.onGenderChange(e.target.value)}
                    className="flex-1 text-[#e6edf3] text-sm outline-none py-2.5 px-4 bg-transparent border-0 border-b border-[#3fb950] cursor-pointer"
                >
                    <option value="" className="bg-[#161b22]">All Genders</option>
                    <option value="female" className="bg-[#161b22]">Female</option>
                    <option value="male" className="bg-[#161b22]">Male</option>
                    <option value="genderless" className="bg-[#161b22]">Genderless</option>
                    <option value="unknown" className="bg-[#161b22]">unknown</option>
                </select>
            </div>
        </div>
    )
}

export default Filters