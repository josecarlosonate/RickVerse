import './App.css'
import CharacterCards from './components/CharacterCards'
import CharacterSkeleton from './components/CharacterSkeleton'
import Header from './components/Header'
import Search from './components/Search'
import { useCharacter } from './hooks/useCharacter'

function App() {

  const { characters, isLoading } = useCharacter()

  return (
    <>
      <Header />
      <Search />
      {isLoading ? <CharacterSkeleton /> : <CharacterCards characters={characters} />}
    </>
  )
}

export default App
