import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Hero from './pages/hero/Hero'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
