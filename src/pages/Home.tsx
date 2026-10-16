import { useCharacters } from '../hooks/useCharacters'
import CharacterCards from '../components/CharacterCards'
import CharacterSkeleton from '../components/CharacterSkeleton'
import Filters from '../components/Filters'
import Alert from '../components/Alert'
import Pagination from '../components/Pagination'

function Home() {

    const {
        characters, isLoading, error, search, setSearch,
        status, setStatus, gender, setGender, showFavorites,
        toggleFavorites, page, setPage, totalPages
    } = useCharacters()

    return (
        <>
            <Filters
                value={search} onChange={setSearch}
                statusValue={status} onStatusChange={setStatus}
                genderValue={gender} onGenderChange={setGender}
                showFavorites={showFavorites} toggleFavorites={toggleFavorites} />
            {
                error ? <Alert type='error' message={error} /> :
                    isLoading ? <CharacterSkeleton /> :
                        characters.length === 0 ? <Alert type='info' message='No characters found' /> :
                            <>
                                <CharacterCards characters={characters} />
                                <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
                            </>
            }
        </>
    )
}

export default Home