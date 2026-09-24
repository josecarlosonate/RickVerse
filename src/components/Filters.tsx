type filtersProps = {
    value: string,
    onChange: (value: string) => void
    statusValue: string,
    onStatusChange: (value: string) => void
    genderValue: string,
    onGenderChange: (value: string) => void
}

function Filters(props: filtersProps) {
    return (
        <div className="w-full mx-auto max-w-lg mt-6 mb-2 flex flex-col gap-3">
            <input value={props.value} onChange={(e) => props.onChange(e.target.value)}
                placeholder="Search characters..."
                className="border border-[#30363d] rounded-lg text-[#e6edf3] placeholder:text-[#8b949e]
                outline-none py-2.5 px-4 bg-[#161b22] w-full
                transition duration-200 focus:ring-2 focus:-translate-y-1"
                type="text" />
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