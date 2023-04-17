import React, { useEffect, useState } from "react";

function Presents() {
  // filtrer les cadeaux en fonction des réponses
  // const filterElements = (responses) => {
  //   setFilteredElements(allPresents.filter(element => {
  //     const age = parseInt(responses.age);
  //     const budget = parseInt(responses.budget);
  //     return parseInt(element.age) <= age && parseInt(element.budget) <= budget;
  //   })) 
  //   // showMoreBtn.addEventListener("click", () => {
  //   //   displayElements(filteredElements);
  //   // });
  //   return filteredElements;
  // }

  // Selectionner 3 cadeaux aléatoires dans la liste qui correspond aux criteres
  // const selectRandomElements = (filteredElements) => {
  //   if (filteredElements.length === 0) {
  //     console.log("Pas de cadeau pour toi, nique ta race héhé");
  //     return [];
  //   }
  //   const newRandomElements = [];
  //   while (newRandomElements.length < 3 && filteredElements.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * filteredElements.length);
  //     newRandomElements.push(filteredElements[randomIndex]);
  //     filteredElements.splice(randomIndex, 1);
  //   }
  //   setRandomElements(newRandomElements);
  //   return newRandomElements;
  // }


    // Récupération des valeurs des champs du formulaire
    // const submit = async (event) => {
    //     event.preventDefault();
    //     // Récupération des valeurs des champs du formulaire
    //     const responses = { age, budget };
    //     // Lancement des fonctions
    //     const filteredElements = filterElements(responses);
    //     const randomElements = selectRandomElements(filteredElements);
      
    //     setRandomElements(randomElements);
    //     // setShowMore(true);
    //   };

  return (
    <>
    </>
  );
}

export default Presents;
