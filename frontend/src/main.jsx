import { StrictMode } from 'react'    // Importation de StrictMode depuis la bibliothèque React pour activer des vérifications supplémentaires pendant le développement
import { createRoot } from 'react-dom/client'  // Importation de la fonction createRoot depuis la bibliothèque ReactDOM pour rendre l'application React dans le DOM ce qui est la nouvelle méthode à partir de React 18 et permet de créer une racine pour l'application React.
import './index.css'
import App from './App.jsx'    // Importation du composant principal App depuis le fichier App.jsx
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
createRoot(document.getElementById('root')).render(   // Cible l'élément HTML avec l'ID 'root' pour y rendre l'application React
  <BrowserRouter>  {/* Composant BrowserRouter pour gérer la navigation dans l'application */}
   <StoreContextProvider>  {/* Fournisseur de contexte global pour le store */}
         <App />        {/* Rendu du composant principal App */}
    </StoreContextProvider>
  </BrowserRouter>

)
