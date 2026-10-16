import { useEffect, useState } from "react";
import type { Character } from "../types/character";
import { useParams } from "react-router-dom";
import { getCharacter } from "../api/rickAndMorty";

export function useCharacter() {
    const [character, setCharacter] = useState<Character | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams()
    const characterId = Number(id);
    const isValidId = !!id && Number.isInteger(characterId) && characterId > 0;

    useEffect(() => {

        if (!isValidId) return;

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
    }, [characterId, isValidId])

    return { character, isLoading, error }
}