import { useState } from "react";
import { toast } from "sonner";

export function useFavorites() {
    const [favoriteIds, setFavoriteIds] = useState<number[]>(getStoredFavorites)
    function isFavorite(id: number) {
        return favoriteIds.includes(id)
    }

    function toggleFavorites(id: number) {
        const newFavoriteIds = isFavorite(id) ? favoriteIds.filter(favoriteId => favoriteId !== id) : [...favoriteIds, id]
        setFavoriteIds(newFavoriteIds)
        localStorage.setItem('favorites', JSON.stringify(newFavoriteIds))
        {/* Mostrar notificación */ }
        const message = isFavorite(id) ? "¡Removed from favorites!" : "¡Added to favorites!"
        const style = isFavorite(id) ? "!bg-[#1c2128] !text-[#3fb950] !text-sm" : "!bg-[#1c2128] !text-[#e3b341] !text-sm"
        toast.success(message, {
            position: "top-right",
            duration: 1000,
            className: style
        })
    }

    return { isFavorite, toggleFavorites }
}

function getStoredFavorites() {
    const storedFavorites = localStorage.getItem('favorites')
    if (!storedFavorites) return []

    try {
        const data = JSON.parse(storedFavorites)
        return (!Array.isArray(data) || !data.every(item => typeof item === "number")) ? [] : data
    } catch {
        return []
    }
}