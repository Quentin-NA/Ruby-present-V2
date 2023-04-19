import { useState, useEffect } from 'react'
import "../Css/form.css"
import TypeMessage from "./present";

import Axios from 'axios';

const Form = () => {

  const [allPresents, setAllPresents] = useState([]);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [affection, setAffection] = useState('');
  const [hobbies, sethobbies] = useState([]);
  const [budget, setBudget] = useState('');
  const [path, setPath] = useState('');




  // const [isTyping, setIsTyping] = useState(false);
  const [firstMessage, setFirstMessage] = useState('');
  const [secondMessage, setSecondMessage] = useState('');
  const [thirdMessage, setThirdMessage] = useState('');
  
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
    setTimeout(() => {
      setFirstMessage("Bonjour, je m'apelle Ruby je viens t'aider à trouver un cadeau");
    }, 1000);
    setTimeout(() => {
      setSecondMessage("C'est très simple tu à juste à suivre mes indications et à répondre aux questions");
    }, 1000);
    setTimeout(() => {
      setThirdMessage("Tout d'abord, la personne à qui tu veux faire un cadeau est-elle une fille ?");
    }, 1000);
  }, []);

    
    
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
  
  const hideButton = (classe) => {
    // Récupération de tous les éléments ayant la même classe
    const elements = document.getElementsByClassName(classe);
    
    // Masquage des éléments
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }

  const showButton = (classe) => {
    // Récupération de tous les éléments ayant la même classe
    const elements = document.getElementsByClassName(classe);
    
    // Affichage des éléments
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  }


  const woman = () => {
    let userText = "Oui c'est une fille";
    let botText = "D'accord, et est-ce une adulte?";
    const genderButton = "genderButton";
    const adultButton = "adultButton";

    hideButton(genderButton)
    showButton(adultButton)
    
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
    let userText = "Non c'est un garçon";
    let botText = "D'accord, et est-ce un adulte?";
    const genderButton = "genderButton";
    const adultButton = "adultButton";

    hideButton(genderButton)
    showButton(adultButton)

    
    setPath('0');
    setGender('man');

    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }


  const adult = () => {
    let userText = "";
    let botText = "";
    const adultButton = "adultButton";
    const familleButton = "familleButton";
    hideButton(adultButton)
    showButton(familleButton)
    console.log(path)
    setAge('Adulte');
    if (path === "1") {
      setPath('1,0')
      userText = "Oui c'est une adulte";
      botText = "D'accord et est-ce une membre de votre famille?"
    } else {
      setPath('0,0')
      userText = "Oui c'est un adulte"
      botText = "D'accord et est-ce un membre de votre famille?"
    }
    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }

  const notAdult = () => {
    let userText = "";
    let botText = "";
    const adultButton = "adultButton";
    const adoButton = "adoButton"
    hideButton(adultButton)
    showButton(adoButton)
    
    if (path === "1") {
      userText = "Non elle n'est pas une adulte";
      botText = "D'accord, et est-ce une ado?";
    } else {
      userText = "Non il n'est pas un adulte";
      botText = "D'accord, et est-ce un ado?";
    }
    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }

  const ado = () => {
    let userText = "";
    let botText = "";
    const adoButton = "adoButton";
    const familleButton = "familleButton"
    setAge('Ado');

    hideButton(adoButton)
    showButton(familleButton)
    
    if (path === "1") {
      setPath('1,1');
      userText = "Oui c'est une ado";
      botText = "D'accord, et est-ce une membre de votre famille?";
    } else {
      setPath('0,1');
      userText = "Oui c'est un ado";
      botText = "D'accord, et est-ce un membre de votre famille?";
    }
    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }

  const notAdo = () => {
    let userText = "";
    let botText = "";

     userText = "Non c'est un enfant";
     botText = "D'accord, et est-ce un membre de votre famille?";
    const adoButton = "adoButton";
    const familleButton = "familleButton"

    setAge('enfant');

    hideButton(adoButton)
    showButton(familleButton)

    
    if (path === "1") {
      setPath('1,2');
      userText = "Non c'est une enfant";
      botText = "D'accord, et est-ce une membre de votre famille?";
    } else {
      setPath("0,2")
      userText = "Non c'est un enfant";
      botText = "D'accord, et est-ce un membre de votre famille?";
    }
    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }


  const famille = () => {

    let userText = "";
    let botText = "";
    const familleButton = "familleButton";
    // const familleButton = "familleButton"
    hideButton(familleButton)
    // showButton(familleButton)
    console.log(path)
    setAffection("Famille")

    switch (path) {
      case "1,0" :
        setPath("1,0,0")
        userText = "Oui c'est une adulte membre de ma famille";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "1,1":
        setPath("1,1,0")
        userText = "Oui c'est une ado membre de ma famille";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "1,2":
        setPath("1,2,0")
        userText = "Oui c'est une enfant membre de ma famille";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "0,0":
        setPath("1,0,0")
        userText = "Oui c'est un adulte membre de ma famille";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "0,1":
        setPath("1,1,0")
        userText = "Oui c'est un ado membre de ma famille";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "0,2":
        setPath("1,2,0")
        userText = "Oui c'est un enfant membre de ma famille";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      default:
        break;
    }
    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }

  const notFamille = () => {
    let userText = "Non ce n'est pas un memmbre de ma famille";
    let botText = "D'accord, et est-ce un ami?";
    const familleButton = "familleButton"
    const friendButton = "friendButton";
    hideButton(familleButton);
    showButton(friendButton);

    
    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }

  const friend = () => {
    let userText = "";
    let botText = "";
    const familleButton = "familleButton";
    // const familleButton = "familleButton"
    hideButton(familleButton)
    // showButton(familleButton)
    console.log(path)
    setAffection("Friend")

    switch (path) {
      case "1,0" :
        setPath("1,0,1")
        userText = "Oui c'est une amie adulte";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "1,1":
        setPath("1,1,1")
        userText = "Oui c'est une amie ado";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "1,2":
        setPath("1,2,1")
        userText = "Oui c'est une amie enfant";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "0,0":
        setPath("1,0,1")
        userText = "Oui c'est un ami adulte";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "0,1":
        setPath("1,1,1")
        userText = "Oui c'est un ami ado";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      case "0,2":
        setPath("1,2,1")
        userText = "Oui c'est un ami enfant";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
      default:
        setPath(path + ",2")
        userText = "Non c'est une connaissance qui n'est ni un ami et qui ne fait pas partie de ma famille";
        botText = "D'accord, et quels sont ces centres d'interets?";
        break;
    }
    setTimeout(() => {
      addMessage(userText, user);
    }, "500");

    setTimeout(() => {
      addMessage(botText, bot);
    }, "2000");
  }

  const notFriend = () => {
    let userText = "Non c'est une connaissance qui n'est ni un ami et qui ne fait pas partie de ma famille";
    let botText = "D'accord, et quels sont ces centres d'interets?";
    const friendButton = "friendButton"
    // const adoButton = "adoButton";
    hideButton(friendButton);
    // showButton(firendButton);

    setPath(path + ",2")
    setAffection("Autre")
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
            {firstMessage && <p>{firstMessage}</p>}             

            
            </div>
            <div className="bot-message fade-in">
              
              {secondMessage && <p>{secondMessage}</p>}             

            </div>
            <div className="bot-message fade-in">
            {thirdMessage && <p>{thirdMessage}</p>}             
            </div>
          </div>
        </div>
        <div className="chat-footer">
          <button id='woman' className='genderButton' onClick={woman}>Oui</button>
          <button id='man' className='genderButton' onClick={man}  >Non</button>

          <button id='adult' className='adultButton' onClick={adult}>Oui</button>
          <button id='not-adult' className='adultButton' onClick={notAdult}>Non</button>

          <button id='ado' className='adoButton' onClick={ado}>Oui</button>
          <button id='not-ado' className='adoButton' onClick={notAdo}>Non</button>

          <button id='famille' className='familleButton' onClick={famille}>Oui</button>
          <button id='not-famille' className='familleButton' onClick={notFamille}>Non</button>

          <button id='friend' className='friendButton' onClick={friend}>Oui</button>
          <button id='not-friend' className='friendButton' onClick={notFriend}>Non</button>
        </div>
      </div>
    </>
  );
  
}

export default Form
