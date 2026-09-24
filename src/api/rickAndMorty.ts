const API_URL = "https://rickandmortyapi.com/api";

type CharacterFilters = {
    name?: string
    status?: string
    gender?: string
}

export async function getCharacters(filters: CharacterFilters = {}) {

    const params = new URLSearchParams()

    if (filters.name) { params.set("name", filters.name) }
    if (filters.status && filters.status !== "all") { params.set("status", filters.status) }
    if (filters.gender) { params.set("gender", filters.gender) }

    const query = params.toString()
    const url = query ? `${API_URL}/character/?${query}` : `${API_URL}/character`

    const response = await fetch(url)
    if (response.status === 404) { return [] }
    if (!response.ok) { throw new Error("Failed to fetch characters") }

    const data = await response.json()
    return data.results
}