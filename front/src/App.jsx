import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App