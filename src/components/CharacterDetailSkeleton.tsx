function CharacterDetailSkeleton() {
    return (
        <section className="py-8 animate-pulse">
            <div className="mx-auto max-w-4xl px-4">

                <div className="mx-auto max-w-2xl">
                    <div className="mb-6 h-5 w-36 rounded" />
                </div>

                <article
                    className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border border-[#30363d] bg-[#1c2128]
                    shadow-[0_30px_70px_rgba(0,0,0,0.85)] md:flex md:flex-row"
                >
                    {/* Botón de Favoritos */}
                    <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-[#21262d]" />

                    {/* Imagen */}
                    <div className="relative h-64 w-full shrink-0 bg-[#21262d] md:h-auto md:w-64">
                        {/* Etiqueta #id */}
                        <div className="absolute top-3 left-3 h-6 w-12 rounded-md bg-[#161b22]" />
                    </div>

                    <div className="flex flex-1 flex-col p-5 md:p-6 justify-between bg-[#161b22]">
                        <div>
                            {/* Nombre */}
                            <div className="h-6 w-3/4 rounded-md bg-[#21262d] md:h-8" />

                            {/* Estado y Especie */}
                            <div className="mt-3 flex items-center gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-[#21262d]" />
                                <div className="h-4 w-1/3 rounded bg-[#21262d]" />
                            </div>

                            {/* Rejilla de Datos */}
                            <div>
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <div className="h-4 w-4/5 rounded bg-[#21262d]" />
                                    <div className="h-4 w-4/5 rounded bg-[#21262d]" />
                                </div>

                                <div className="mt-5 flex flex-col gap-3">
                                    <div className="h-6 w-full rounded-lg bg-[#21262d]/50 border border-[#30363d]/70" />
                                    <div className="h-6 w-full rounded-lg bg-[#21262d]/50 border border-[#30363d]/70" />
                                </div>
                            </div>
                        </div>

                        {/* footer */}
                        <div className="mt-8 border-t border-[#30363d] pt-3 flex items-center justify-between">
                            <div className="h-4 w-5/12 rounded bg-[#21262d]" />
                            <div className="h-4 w-3/12 rounded bg-[#21262d]" />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default CharacterDetailSkeleton