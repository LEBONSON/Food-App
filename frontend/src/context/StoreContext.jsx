import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";

// création du contexte global pour le store qui sera utilisé dans toute l'application afin d'éviter le prop drilling qui est le passage des props à travers plusieurs niveaux de composants
export const StoreContext = createContext(null);

/* Composant provider qui va envelopper l'application et fournir le contexte global aux composants enfants */
const StoreContextProvider = (props) => {
  const contextValue = {
    // ici on peut ajouter des valeurs ou des fonctions globales à partager dans l'application
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {" "}
      {/* Fournir le contexte aux composants enfants et leur permettre d'y accéder */}
      {props.children}{" "}
      {/* Rendre les enfants du provider c'est à dire les composants qui seront enveloppés par ce provider, il permet de partager le contexte avec eux */}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
