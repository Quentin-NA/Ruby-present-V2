import { useState, useEffect } from 'react'
import "../Css/form.css"
import Axios from 'axios';

const Form = () => {

  const [allPresents, setAllPresents] = useState([]);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [affection, setAffection] = useState('');
  const [hobbies, sethobbies] = useState([]);
  const [budget, setBudget] = useState('');
  const [path, setPath] = useState('');
  
  // const [randomElements, setRandomElements] = useState([]);
  // const [filteredElements, setFilteredElements] = useState([]);

  const [userText, setUserText] = useState("");
  const [botText, setBotText] = useState("");

  const bot = "bot";
  const user = "user";


  useEffect(() =>  {
    Axios.get('http://localhost:3001').then((response) => {
        setAllPresents(response.data)
        console.log("Data received: ", allPresents)
    });
  }, []);

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
    
    
    const chat = document.getElementById('chat');
    const bubbleChat = document.querySelector('.chat-box');
    const chatFooter = document.querySelector('.chat-footer');
  
  // Fonction pour ajouter un message à la zone de chat


  
  
  
  
  const addMessage = (text, sender) => {
    const message = document.createElement('div');
    message.classList.add(`${sender}-message`);
    message.innerHTML = `<p>${text}</p>`;
    chat.appendChild(message);
    message.classList.add('animate__animated', 'animate__bounceIn');
    
    // Descendre la barre de défilement automatiquement
    bubbleChat.scrollTop = bubbleChat.scrollHeight;
  }
  
  
  
  function hideButton(classe) {
    // Récupération de tous les éléments ayant la même classe
    const elements = document.getElementsByClassName(classe);
    
    // Masquage des éléments
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }

  const createButtonWithFunction = (onClickFunction) => {
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    button1.innerHTML = 'Oui';
    button1.onclick = onClickFunction;
    button2.innerHTML = 'Non';
    button2.onclick = onClickFunction;
    chatFooter.appendChild(button1);
    chatFooter.appendChild(button2);
  }
  
  
  const woman = () => {
    let botText = "D'accord, et est-ce un adulte?";
    let userText = "Oui c'est une femme";
    const classe = "firstBtn";
    const onClickFunction = "blabla"
    hideButton(classe)
    createButtonWithFunction(onClickFunction);
    
    setPath('1');
    setGender('woman');
    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }




  const man = () => {
    let botText = "D'accord, et est-ce un adulte?";
    let userText = "Oui c'est une homme";
    const classe = "firstBtn";
    const onClickFunction = "blabla"
    hideButton(classe)
    createButtonWithFunction(onClickFunction);
    
    setPath('0');
    setGender('man');
    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }


  return (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <h2>Ruby</h2>
        </div>
        <div className="chat-box">
          <div className="chat" id="chat">
            <div className="bot-message fade-in">
              <p>Bonjour, je m'apelle Ruby je viens t'aider à trouver un cadeau parceque t'es une merde !</p>
            </div>
            <div className="bot-message fade-in">
              <p>Pose ton petit cul et admire</p>
            </div>
            <div className="bot-message fade-in">
              <p>Tout d'abord, la personne à qui tu veux faire un cadeau est-elle une femme ?</p>
            </div>
          </div>
        </div>
        <div className="chat-footer">
          <button id='woman' className='firstBtn' onClick={woman}>Oui</button>
          <button id='man' className='firstBtn' onClick={man}  >Non</button>
        </div>
      </div>
    </>
  );
  
}

export default Form
