import { useEffect, useState } from "react";
import type { Character, GenderFilter, StatusFilter } from "../types/character";
import { getCharacters } from "../api/rickAndMorty";


export function useCharacters() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [search, setSearch] = useState<string>('')
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const [status, setStatus] = useState<StatusFilter>('all')
    const [gender, setGender] = useState<GenderFilter>("")

    useEffect(() => {

        setError(null)
        setIsLoading(true)

        async function loadCharacter() {
            try {
                const results = await getCharacters({ name: debouncedSearch, status, gender })
                setCharacters(results)
            } catch {
                setError('Failed to fetch characters')
            } finally {
                setIsLoading(false)
            }
        }

        loadCharacter()
    }, [debouncedSearch, status, gender])

    // EFECTO 2: Maneja el temporizador para retrasar la búsqueda (Antirrebote / Debounce)
    useEffect(() => {
        const id = setTimeout(() => setDebouncedSearch(search), 500)
        return () => clearTimeout(id);
    }, [search])

    return {
        characters,
        isLoading,
        error,
        search,
        setSearch,
        status,
        setStatus,
        gender,
        setGender
    }
}