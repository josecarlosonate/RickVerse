import './App.css'
import CharacterCards from './components/CharacterCards'
import CharacterSkeleton from './components/CharacterSkeleton'
import Header from './components/Header'
import Filters from './components/Filters'
import { useCharacter } from './hooks/useCharacter'
import Alert from './components/Alert'

function App() {

  const { characters, isLoading, error, search, setSearch, status, setStatus, gender, setGender } = useCharacter()

  return (
    <>
      <Header />
      <Filters value={search} onChange={setSearch} statusValue={status} onStatusChange={setStatus} genderValue={gender} onGenderChange={setGender} />
      {
        error ? <Alert type='error' message={error} /> :
          isLoading ? <CharacterSkeleton /> :
            characters.length === 0 ? <Alert type='info' message='No characters found' /> :
              <CharacterCards characters={characters} />
      }
    </>
  )
}

export default App
