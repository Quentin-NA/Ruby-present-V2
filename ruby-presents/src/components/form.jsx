import { useState, useEffect } from 'react';
import Axios from 'axios';

const Form = () => {
  const [allPresents, setAllPresents] = useState([]);
  const [randomElements, setRandomElements] = useState([]);
  const [age, setAge] = useState('');
  const [budget, setBudget] = useState('');
  const [responses, setResponses] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Axios.get('http://localhost:3001').then((response) => {
      setAllPresents(response.data);
      setIsLoaded(true);
    });
  }, []);

  function filterElements(responses) {
    const filteredElements = allPresents.filter((element) => {
      const age = parseInt(responses.age);
      const budget = parseInt(responses.budget);
      return (
        parseInt(element.age) <= age && parseInt(element.budget) <= budget
      );
    });
    return filteredElements;
  }

  function selectRandomElements(filteredElements) {
    if (filteredElements.length === 0) {
      console.log("Pas de cadeau pour toi, nique ta race héhé");
      return [];
    }
    while (randomElements.length < 3 && filteredElements.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredElements.length);
      randomElements.push(filteredElements[randomIndex]);
      filteredElements.splice(randomIndex, 1);
    }
    return randomElements;
  }

  const handleChange = (e) => {
    switch (e.target.id) {
      case "age":
        setAge(e.target.value);
        break;
      case "budget":
        setBudget(e.target.value);
        break;
      default:
        return;
    }
  };

  const submit = async (event) => {
    event.preventDefault();
    // Vérifiez si les données ont été chargées avant le submit
    if (isLoaded) {
      const filteredElements = filterElements(responses);
      const randomElements = selectRandomElements(filteredElements);
      return randomElements;
    } else {
      console.log("Données non chargées");
    }
  };

  return (
    <>
      <form className="login-form-container" onSubmit={submit}>
        <div className="inputs">
          {console.log(allPresents)}
          <label htmlFor="budget">Quel budget ?</label>
          <input
            type="number"
            id="budget"
            name="budget"
            onChange={handleChange}
            required
          ></input>

          <label htmlFor="age">Quel âge ?</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            required
          ></input>
        </div>
        <button type="submit">Envoyer</button>
      </form>

      <div>
        {console.log(randomElements)}
        {randomElements.map((present) => (
          <a href={present.lien}>
            <img src={present.image} alt="imag"></img>
            <p>{present.name}</p>
          </a>
        ))}
      </div>
    </>
  )
}

export default Form
