import { useEffect, useState } from "react";
import type { Character } from "../types/character";
import { getCharacters, getCharactersByIds } from "../api/rickAndMorty";
import { useFavorites } from "./useFavorites";

export function useCharacters() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [search, setSearch] = useState<string>('')
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const [status, setStatus] = useState('all')
    const [gender, setGender] = useState("")
    const [showFavorites, setShowFavorites] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const { favoriteIds } = useFavorites()

    // Reset page when filters change
    useEffect(() => {
        setPage(1)
    }, [debouncedSearch, status, gender, showFavorites])

    useEffect(() => {

        setError(null)
        setIsLoading(true)

        async function loadCharacter() {
            try {

                if (showFavorites) {
                    const results = await getFilteredFavoriteCharacters(favoriteIds)
                    setCharacters(results)
                    setTotalPages(1)
                } else {
                    const { results, totalPages: pages } = await getCharacters({
                        name: debouncedSearch,
                        status,
                        gender,
                        page
                    })
                    setCharacters(results)
                    setTotalPages(pages)
                }

            } catch {
                setError('Failed to fetch characters')
            } finally {
                setIsLoading(false)
            }
        }

        loadCharacter()
    }, [debouncedSearch, status, gender, showFavorites, page, favoriteIds])

    // EFECTO 2: Maneja el temporizador para retrasar la búsqueda (Antirrebote / Debounce)
    useEffect(() => {
        const id = setTimeout(() => setDebouncedSearch(search), 500)
        return () => clearTimeout(id);
    }, [search])

    // ON - OFF de favoritos
    function toggleFavorites() {
        setShowFavorites(!showFavorites)
    }

    async function getFilteredFavoriteCharacters(favoriteIds: number[]): Promise<Character[]> {

        let results = await getCharactersByIds(favoriteIds)

        if (gender !== "") {
            results = results.filter(character => character.gender.toLowerCase() === gender)
        }
        if (status !== "all") {
            results = results.filter(character => character.status.toLowerCase() === status)
        }
        if (debouncedSearch !== "") {
            results = results.filter(character => character.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
        }

        return results
    }

    return {
        characters,
        isLoading,
        error,
        search,
        setSearch,
        status,
        setStatus,
        gender,
        setGender,
        showFavorites,
        toggleFavorites,
        page,
        totalPages,
        setPage
    }
}
