import { useEffect, useState } from "react";
import type { character } from "../types/character";
import { getCharacters } from "../api/rickAndMorty";


export function useCharacter() {
    const [characters, setCharacters] = useState<character[]>([])

    useEffect(() => {

        async function loadCharacter() {
            const results = await getCharacters()
            setCharacters(results)
        }

        loadCharacter()
    }, [])

    return {
        characters
    }
}