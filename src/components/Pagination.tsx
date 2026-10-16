type PaginationProps = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null

    const canGoPrev = currentPage > 1
    const canGoNext = currentPage < totalPages

    return (
        <div className="w-full mx-auto max-w-lg mt-6 mb-8">
            <div className="flex items-center justify-center gap-4 px-4 py-3 rounded-xl border border-[#30363d] bg-[#161b22]">

                <button type="button" onClick={() => canGoPrev && onPageChange(currentPage - 1)} disabled={!canGoPrev}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200
                    ${canGoPrev
                            ? "border-[#30363d] text-[#e6edf3] hover:border-[#8b949e] hover:bg-[#21262d] cursor-pointer"
                            : "border-[#21262d] text-[#484f58] cursor-not-allowed"}`}>
                    <span className="text-base">‹</span>
                    Previous
                </button>

                <span className="text-[#e6edf3] font-semibold text-sm whitespace-nowrap">
                    Page {currentPage} of {totalPages}
                </span>

                <button type="button" onClick={() => canGoNext && onPageChange(currentPage + 1)} disabled={!canGoNext}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200
                    ${canGoNext
                            ? "border-[#30363d] text-[#e6edf3] hover:border-[#8b949e] hover:bg-[#21262d] cursor-pointer"
                            : "border-[#21262d] text-[#484f58] cursor-not-allowed"}`}>
                    Next
                    <span className="text-base">›</span>
                </button>

            </div>
        </div>
    )
}

export default Pagination