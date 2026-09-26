import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import CharacterDetail from './pages/CharacterDetail'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
