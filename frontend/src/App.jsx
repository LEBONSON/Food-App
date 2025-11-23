import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
const App = () => {
  return (
    <div className="app">
      <Navbar/>     {/* Inclusion du composant Navbar dans l'application qui sera affiché sur toutes les pages */}
    <Routes>
      <Route path="/" element={<Home/>} />  {/* Définition de la route pour la page d'accueil */}
      <Route path="/cart" element={<Cart/>} />  {/* Définition de la route pour la page du panier */}
      <Route path="/order" element={<PlaceOrder/>} />  {/* Définition de la route pour la page de commande */}
    </Routes>
    </div>
  )
}

export default App  // Exportation du composant App vers d'autres fichiers