import './App.css'
import CharacterCards from './components/CharacterCards'
import Header from './components/Header'
import Search from './components/Search'
import { useCharacter } from './hooks/useCharacter'

function App() {

  const { characters } = useCharacter()

  return (
    <>
      <Header />
      <Search />
      <CharacterCards characters={characters} />
    </>
  )
}

export default App
