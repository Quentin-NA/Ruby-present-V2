import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const fetchHobbies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/hobbies');
        setHobbies(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchHobbies();
  }, []);

  return (
    <div>
      <p>Here are the hobbies:</p>
      {hobbies.map((hobby) => (
        <p key={hobby.id}>{hobby.name}</p>
      ))}
    </div>
  );
};

export default Hobbies;
