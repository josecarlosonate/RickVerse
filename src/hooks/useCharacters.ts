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
    const { favoriteIds } = useFavorites()

    useEffect(() => {

        setError(null)
        setIsLoading(true)

        async function loadCharacter() {
            try {
                const results = showFavorites
                    ? await getCharactersByIds(favoriteIds)
                    : await getCharacters({ name: debouncedSearch, status, gender })
                setCharacters(results)
            } catch {
                setError('Failed to fetch characters')
            } finally {
                setIsLoading(false)
            }
        }

        loadCharacter()
    }, [debouncedSearch, status, gender, showFavorites, favoriteIds])

    // EFECTO 2: Maneja el temporizador para retrasar la búsqueda (Antirrebote / Debounce)
    useEffect(() => {
        const id = setTimeout(() => setDebouncedSearch(search), 500)
        return () => clearTimeout(id);
    }, [search])

    // ON - OFF de favoritos
    function toggleFavorites() {
        setShowFavorites(!showFavorites)
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
        toggleFavorites
    }
}