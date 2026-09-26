import { useEffect, useState } from "react";
import type { Character } from "../types/character";
import { useParams } from "react-router-dom";
import { getCharacter } from "../api/rickAndMorty";

export function useCharacter() {
    const [character, setCharacter] = useState<Character | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams()

    useEffect(() => {

        setCharacter(null)
        setError(null)
        setIsLoading(true)

        const characterId = Number(id)
        if (!id || !Number.isInteger(characterId) || characterId <= 0) {
            setError("Invalid character ID")
            setIsLoading(false)
            return
        }

        async function loadCharacter() {
            try {
                const data = await getCharacter(characterId)
                setCharacter(data)
            } catch {
                setError("Failed to fetch character")
            } finally {
                setIsLoading(false)
            }
        }

        loadCharacter()
    }, [id])

    return { character, isLoading, error }
}