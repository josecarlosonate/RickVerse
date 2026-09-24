import { useEffect, useState } from "react";
import type { character } from "../types/character";
import { getCharacters } from "../api/rickAndMorty";


export function useCharacter() {
    const [characters, setCharacters] = useState<character[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function loadCharacter() {
            try {
                const results = await getCharacters()
                setCharacters(results)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }

        loadCharacter()
    }, [])

    return {
        characters,
        isLoading
    }
}