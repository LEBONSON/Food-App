import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

// création du contexte global pour le store qui sera utilisé dans toute l'application afin d'éviter le prop drilling qui est le passage des props à travers plusieurs niveaux de composants
export const StoreContext = createContext(null);

/* Composant provider qui va envelopper l'application et fournir le contexte global aux composants enfants */
const StoreContextProvider = (props) => {
  const [carditems, setCarditems] = useState({}); // état local pour stocker les éléments du panier, initialisé à un objet vide

  /* La fonction addToCart est utilisée pour ajouter un item au panier. Elle prend en paramètre l'ID de l'item à ajouter. Si l'item n'est pas encore dans le panier, il est ajouté avec une quantité de 1. Si l'item est déjà dans le panier, sa quantité est augmentée de 1. */
  const addToCart = (itemId) => {
    if (!carditems[itemId]) {
      setCarditems((prev) => ({ ...prev, [itemId]: 1 })); // si l'item n'est pas encore dans le panier, on l'ajoute avec une quantité de 1 et les .... nous sert à conserver les éléments précédents du panier tout en ajoutant le nouvel item avec sa quantité car setCarditems remplace l'état précédent par le nouvel état, en utilisant la syntaxe de mise à jour fonctionnelle de useState, on peut accéder à l'état précédent (prev) et le mettre à jour en ajoutant le nouvel item avec sa quantité. Cela garantit que les éléments précédents du panier ne sont pas perdus lors de l'ajout d'un nouvel item.
    } else {
      setCarditems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); // si l'item est déjà dans le panier, on augmente sa quantité de 1
    }
  }


  /* La fonction removeFromCart est utilisée pour retirer un item du panier. Elle prend en paramètre l'ID de l'item à retirer. Si l'item est dans le panier, sa quantité est diminuée de 1. Si la quantité atteint 0, l'item peut être supprimé du panier (ce qui n'est pas implémenté dans ce code). */
  const removeFromCart = (itemId) => {
    setCarditems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); // si l'item est dans le panier, on diminue sa quantité de 1
  }


  

  const contextValue = {
    // ici on peut ajouter des valeurs ou des fonctions globales à partager dans l'application
    food_list,
    carditems,
    setC

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
