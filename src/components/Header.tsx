import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="flex h-20 items-center justify-between border-b border-[#21262d]">
            <Link to="/">
                <a href="/" className="flex items-center gap-3 text-lg font-semibold text-[#e6edf3]">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#30363d] bg-[#161b22] font-bold text-[#3fb950]">
                        RM
                    </span>
                    <span>RickVerse</span>
                </a>
            </Link>
            <div className="flex items-center gap-2 rounded-full border border-[#238636] px-3 py-2 text-sm text-[#3fb950]">
                <span className="h-2 w-2 rounded-full bg-[#3fb950]"></span>
                API Online
            </div>
        </header>
    )
}

export default Header