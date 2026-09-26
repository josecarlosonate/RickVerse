export type Character = {
    id: number;
    image: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
    };
    episode: string[];
    created: string;
}

export type StatusFilter = "alive" | "dead" | "unknown" | "all"

export type GenderFilter = "female" | "male" | "genderless" | "unknown" | ""