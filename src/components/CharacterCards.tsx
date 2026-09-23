function CharacterCards() {
    return (
        <>
            <section className="py-10">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col sm:flex-row sm:h-32 w-full max-w-sm overflow-hidden rounded-xl
                    border border-[#30363d] bg-[#161b22] transition duration-200 hover:ring-1 hover:-translate-y-1.5">
                        <div className="w-full h-48 sm:w-28 sm:h-full shrink-0 bg-[#21262d]">
                            <img className="h-full w-full object-fit: cover" src="" alt="imagen" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between p-3 text-left">
                            <div className="flex flex-col justify-center grow pb-2">
                                <h3 className="text-base font-bold text-[#e6edf3] line-clamp-1 leading-tight">
                                    nombre
                                </h3>
                                <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
                                    <span></span>
                                    <span>estatus - especie</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 border-t border-[#21262d] pt-2">
                                <div>
                                    <span className="text-[9px] text-gray-500 block uppercase tracking-wider font-semibold">genero</span>
                                    <span className="text-[11px] text-gray-300 line-clamp-1">xxxxx</span>
                                </div>
                                <div>
                                    <span className="text-[9px] text-gray-500 block uppercase tracking-wider font-semibold">locacion </span>
                                    <span className="text-[11px] text-gray-300 line-clamp-1">xx xxx x</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default CharacterCards