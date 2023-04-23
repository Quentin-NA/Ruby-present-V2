import React, { useState, useEffect } from 'react';
import '../Css/hobbies.css';
import axios from 'axios';

const Hobbies = (props) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  useEffect(() => {
    const fetchHobbies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/hobbies');
        props.setHobbies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHobbies();
  }, []);


  const selectHobby = (event) => {
    const hobby = event.target;
    hobby.classList.toggle('selected-hobby');
  
    const selectedHobbyNames = Array.from(document.querySelectorAll('.selected-hobby'))
      .map((hobby) => hobby.textContent);
  
    if (selectedHobbyNames.length <= 5) {
      setSelectedHobbies(selectedHobbyNames);
    } else {
      hobby.classList.toggle('selected-hobby');
    }
    // console.log(selectedHobbies);
  };
  

  return (
    <>
      {/* <a href="http://localhost:3000">Ruby</a> */}
        <div className="hobbies-container">
          {props.hobbies.map((hobby) => (
            <p className="hobby" onClick={selectHobby} key={hobby.id}>
              {hobby.name}
            </p>
          ))}
        </div>
    </>
  );
};

export default Hobbies;
