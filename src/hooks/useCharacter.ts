import { useEffect, useState } from "react";
import type { character } from "../types/character";
import { useParams } from "react-router-dom";
import { getCharacter } from "../api/rickAndMorty";

export function useCharacter() {
    const [character, setCharacter] = useState<character | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams()

    useEffect(() => {

        setError(null)
        setIsLoading(true)

        if (!id || isNaN(Number(id))) {
            setError("Invalid character ID");
            setIsLoading(false);
            return;
        }
        const validId = id;

        async function loadCharacter() {
            try {
                const data = await getCharacter(validId)
                setCharacter(data)
                setIsLoading(false)
            } catch (error) {
                setError("Failed to fetch character")
                setIsLoading(false)
            }
        }

        loadCharacter()
    }, [id])

    return { character, isLoading, error }
}