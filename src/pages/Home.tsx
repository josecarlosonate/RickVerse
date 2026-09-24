import { useCharacter } from '../hooks/useCharacter'
import CharacterCards from '../components/CharacterCards'
import CharacterSkeleton from '../components/CharacterSkeleton'
import Filters from '../components/Filters'
import Alert from '../components/Alert'

function Home() {

    const { characters, isLoading, error, search, setSearch, status, setStatus, gender, setGender } = useCharacter()

    return (
        <>
            <Filters
                value={search} onChange={setSearch}
                statusValue={status} onStatusChange={setStatus}
                genderValue={gender} onGenderChange={setGender} />
            {
                error ? <Alert type='error' message={error} /> :
                    isLoading ? <CharacterSkeleton /> :
                        characters.length === 0 ? <Alert type='info' message='No characters found' /> :
                            <CharacterCards characters={characters} />
            }
        </>
    )
}

export default Home