import { Link } from "react-router-dom"
import type { Character } from "../types/character"

type CharacterProfileProps = {
    character: Character
}

function CharacterProfile(props: CharacterProfileProps) {
    const statusColors: Record<string, string> = {
        Alive: "bg-[#3fb950]",
        Dead: "bg-red-500",
        unknown: "bg-gray-500",
    }

    return (
        <>
            <section className="py-8">
                <div className="mx-auto max-w-4xl px-4">
                    <Link to="/" className="mb-6 inline-block text-md text-[#8b949e] hover:text-[#3fb950]">
                        ← Back to characters
                    </Link>

                    <article
                        className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border border-[#444c56] bg-[#1c2128]
                        shadow-[0_30px_70px_rgba(0,0,0,0.85)] md:flex md:flex-row transition-all duration-300 ease-out
                        hover:-translate-y-1.5 hover:scale-[1.03] hover:ring-1">
                        <button
                            title="Add to favorites"
                            className="absolute top-4 right-4 z-10 rounded-full border border-[#30363d] bg-[#21262d]/80 p-2 
                            text-[#8b949e] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-[#e3b341]
                            hover:text-[#e3b341] hover:bg-[#21262d] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 
                                0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 
                                0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 
                                0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>

                        </button>
                        <div className="relative h-64 w-full shrink-0 bg-[#21262d] md:h-auto md:w-64">
                            <img className="h-full w-full object-cover" src={props.character.image} alt={props.character.name} />
                            <span className="absolute top-3 left-3 rounded-md border border-[#30363d] bg-[#161b22] px-2 py-0.5
                            font-bold text-[#3fb950] backdrop-blur-sm">
                                #{props.character.id}
                            </span>
                        </div>

                        <div className="flex flex-1 flex-col p-5 md:p-6 justify-between">

                            <div>
                                <h2 className="text-2xl font-bold tracking-tight md:text-3xl pr-10 truncate block
                                 text-[#f0f6fc]! line-clamp-1 leading-tight">
                                    {props.character.name}
                                </h2>
                                <div className="mt-1.5 flex items-center gap-2 text-xs font-medium text-[#8b949e]">
                                    <span
                                        className={`h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_8px_currentcolor]
                                             ${statusColors[props.character.status] || "bg-gray-500"}`}
                                    />
                                    <span className="capitalize">
                                        {props.character.status} · {props.character.species}
                                    </span>
                                </div>
                                <div>
                                    <div className="mt-5 grid grid-cols-2 gap-3">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#8b949e]">
                                                Type :
                                            </span>
                                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#8b949e]">
                                                {props.character.type || "Unknown"}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#8b949e]">
                                                Gender :
                                            </span>
                                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#8b949e]">
                                                {props.character.gender}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex flex-col gap-2">
                                        <div className="flex items-center gap-3 justify-center rounded-lg bg-[#21262d]/50 border border-[#30363d]/70 py-0.5">
                                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#8b949e]">
                                                Origin :
                                            </span>
                                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#8b949e]">
                                                {props.character.origin.name}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 justify-center  rounded-lg bg-[#21262d]/50 border border-[#30363d]/70 py-0.5">
                                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#8b949e]">
                                                Location :
                                            </span>
                                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#8b949e]">
                                                {props.character.location.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 border-t border-[#30363d] pt-3 text-[13px] text-[#8b949e] 
                                 font-medium flex items-center justify-between">
                                <span>
                                    Appears in <strong className="text-[#58a6ff]"> {props.character.episode.length}
                                    </strong> {props.character.episode.length === 1 ? "episode " : "episodes "}
                                </span>
                                <span>created {new Date(props.character.created).toLocaleDateString()}</span>
                            </div>
                        </div>

                    </article>
                </div>
            </section>
        </>
    )
}

export default CharacterProfile