import type { Character } from "../types/character"

const API_URL = "https://rickandmortyapi.com/api";

type CharactersResponse = {
    results: Character[]
}

type CharacterFilters = {
    name?: string
    status?: string
    gender?: string
}

export async function getCharacters(filters: CharacterFilters = {}): Promise<Character[]> {

    const params = new URLSearchParams()

    if (filters.name) { params.set("name", filters.name) }
    if (filters.status && filters.status !== "all") { params.set("status", filters.status) }
    if (filters.gender) { params.set("gender", filters.gender) }

    const query = params.toString()
    const url = query ? `${API_URL}/character/?${query}` : `${API_URL}/character`

    const response = await fetch(url)
    if (response.status === 404) { return [] }
    if (!response.ok) { throw new Error("Failed to fetch characters") }

    const data: CharactersResponse = await response.json()
    return data.results
}

export async function getCharacter(id: number): Promise<Character | null> {

    const url = `${API_URL}/character/${id}`

    const response = await fetch(url)
    if (response.status === 404) { return null }
    if (!response.ok) { throw new Error("Failed to fetch character") }

    const data: Character = await response.json()
    return data
}

export async function getCharactersByIds(ids: number[]): Promise<Character[]> {
    if (!ids.length) { return [] }

    const favoriteIds = ids.join(",")
    const url = `${API_URL}/character/${favoriteIds}`

    const response = await fetch(url)
    if (response.status === 404) { return [] }
    if (!response.ok) { throw new Error("Failed to fetch characters") }

    const data = await response.json()
    return Array.isArray(data) ? data : [data]
}