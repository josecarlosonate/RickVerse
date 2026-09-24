import { useEffect, useState } from "react";
import type { character } from "../types/character";
import { getCharacters } from "../api/rickAndMorty";


export function useCharacter() {
    const [characters, setCharacters] = useState<character[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [search, setSearch] = useState<string>('')
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const [status, setStatus] = useState('all')
    const [gender, setGender] = useState("")

    useEffect(() => {

        setError(null)
        setIsLoading(true)

        async function loadCharacter() {
            try {
                const results = await getCharacters({ name: debouncedSearch, status, gender })
                setCharacters(results)
                setIsLoading(false)
            } catch (error) {
                setError('Failed to fetch characters')
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