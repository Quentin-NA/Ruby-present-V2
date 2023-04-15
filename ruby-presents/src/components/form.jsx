import { useState, useEffect } from 'react'
import "../Css/form.css"
import Axios from 'axios';

const Form = () => {

  const [allPresents, setAllPresents] = useState([]);
  const [randomElements, setRandomElements] = useState([]);
  const [age, setAge] = useState('');
  const [budget, setBudget] = useState('');
  const [filteredElements, setFilteredElements] = useState([]);
//   const [showMore, setShowMore] = useState(false);



  useEffect(() =>  {
    Axios.get('http://localhost:3001').then((response) => {
        setAllPresents(response.data)
        console.log("Data received: ", allPresents)
    });
  }, []);

  // filtrer les cadeaux en fonction des réponses
  const filterElements = (responses) => {
    setFilteredElements(allPresents.filter(element => {
      const age = parseInt(responses.age);
      const budget = parseInt(responses.budget);
      return parseInt(element.age) <= age && parseInt(element.budget) <= budget;
    })) 
    // showMoreBtn.addEventListener("click", () => {
    //   displayElements(filteredElements);
    // });
    return filteredElements;
  }

  // Selectionner 3 cadeaux aléatoires dans la liste qui correspond aux criteres
  const selectRandomElements = (filteredElements) => {
    if (filteredElements.length === 0) {
      console.log("Pas de cadeau pour toi, nique ta race héhé");
      return [];
    }
    const newRandomElements = [];
    while (newRandomElements.length < 3 && filteredElements.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredElements.length);
      newRandomElements.push(filteredElements[randomIndex]);
      filteredElements.splice(randomIndex, 1);
    }
    setRandomElements(newRandomElements);
    return newRandomElements;
  }


//   const handleClick = () => {
//     setShowMore(!showMore);
//   };
  
  
  
  // Actualisation les données du formulaire
  const handleChange = (e) => {
    switch (e.target.id) {
      case 'age':
        setAge(e.target.value);
      break
      case 'budget':
        setBudget(e.target.value);
      break
      default: return;
  }
} 


    // Récupération des valeurs des champs du formulaire
    const submit = async (event) => {
        event.preventDefault();
        // Récupération des valeurs des champs du formulaire
        const responses = { age, budget };
        // Lancement des fonctions
        const filteredElements = filterElements(responses);
        const randomElements = selectRandomElements(filteredElements);
      
        setRandomElements(randomElements);
        // setShowMore(true);
      };
      
    

  return (
    <>
        <img id="ruby" src={require("../images/logorubyFichier-4.png")} alt='logo' />
        <form className='login-form-container' onSubmit={submit}>
            <div className="inputs">
                {console.log(allPresents)}
                <label htmlFor="budget">Quel budget ?</label>
                <input type="number" id="budget" name="budget" onChange={handleChange} required></input>
        
                <label htmlFor="age">Quel âge ?</label>
                <input type="number" id="age" name="age" onChange={handleChange} required></input>
        
                {/* <label for="gender">Homme ou femme ?</label>
                <select id="gender" name="gender">
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
                </select>
        
                <label for="interests">Centres d'intérêts :</label>
                <textarea id="interests" name="interests"></textarea>
        
                <label for="hobbies">Hobbies :</label>
                <textarea id="hobbies" name="hobbies"></textarea> */}
            </div>
            <button type="submit">Envoyer</button>
        </form>

        <div id="presents" className='showPresents'>
            {console.log(randomElements)} 
            {randomElements.map((present) =>
                <a href={present.lien} key={present.id}>
                    <img src={present.image} alt='imag'></img>
                    <p>{present.name}</p>
                </a>
            )}
        </div>


        {/* <div id='showAllPresents' className={showMore ? 'active' : ''}>
        {console.log(filteredElements)} 
        {filteredElements.map((present) =>
            <a href={present.lien} key={present.id}>
            <img src={present.image} alt='imag'></img>
            <p>{present.name}</p>
            </a>
        )}
        </div> */}

    </>
  )
}

export default Form
