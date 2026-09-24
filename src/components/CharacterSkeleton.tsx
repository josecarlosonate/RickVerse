function CharacterSkeleton() {
    const skeletonCards = Array.from({ length: 10 });
    return (
        <>
            <section className="py-10">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {skeletonCards.map((_, index) => (
                        <div key={index}
                            className="flex flex-col sm:flex-row sm:h-32 w-full max-w-sm overflow-hidden 
                            rounded-xl border border-[#30363d] bg-[#161b22] animate-pulse">
                            {/* Espacio de la Imagen */}
                            <div className="w-full h-48 sm:w-28 sm:h-full shrink-0 bg-[#21262d]" />
                            {/* Contenido de la Tarjeta */}
                            <div className="flex flex-1 flex-col justify-between p-3 text-left">
                                <div className="flex flex-col justify-center grow pb-2">
                                    {/* Bloque para el Nombre */}
                                    <div className="h-4 w-3/4 rounded bg-[#21262d] mb-2" />
                                    {/* Bloque para el Estado y Especie */}
                                    <div className="flex items-center gap-1.5">
                                        <div className="h-2 w-2 rounded-full bg-[#21262d] shrink-0" />
                                        <div className="h-3 w-1/2 rounded bg-[#21262d]" />
                                    </div>
                                </div>
                                {/* Sección Inferior (Gender y Location) */}
                                <div className="grid grid-cols-2 gap-2 border-t border-[#21262d] pt-2">
                                    <div className="flex flex-col gap-1">
                                        <div className="h-2 w-10 rounded bg-[#21262d]" />
                                        <div className="h-3 w-16 rounded bg-[#21262d]" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="h-2 w-12 rounded bg-[#21262d]" />
                                        <div className="h-3 w-20 rounded bg-[#21262d]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>

    )
}

export default CharacterSkeleton