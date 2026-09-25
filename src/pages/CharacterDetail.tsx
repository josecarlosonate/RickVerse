import Alert from "../components/Alert"
import CharacterDetailSkeleton from "../components/CharacterDetailSkeleton"
import CharacterProfile from "../components/CharacterProfile"
import { useCharacter } from "../hooks/useCharacter"

function CharacterDetail() {

    const { character, isLoading, error } = useCharacter()

    return (
        <>
            {
                isLoading ? <CharacterDetailSkeleton /> :
                    error ? <Alert type="error" message={error} /> :
                        !character ? <Alert type="error" message="Character not found" /> :
                            <CharacterProfile character={character} />
            }
        </>
    )
}

export default CharacterDetail