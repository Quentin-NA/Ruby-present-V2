
import { useState, useEffect } from 'react'
import Axios from 'axios';
import '../../CSS/home.css'

const Home = () => {

  
    const [allPresents, setAllPresents] = useState([]);
//   const [selection, setSelection] = useState([])
//   const [price, setPrice] = useState(50)
  

  useEffect(() =>  {
    Axios.get('http://localhost:3001').then((response) => {
        console.log(response)
        console.log(allPresents)

        setAllPresents(response.data)
        console.log(allPresents)
    });
  }, []);

  return (
    <div className='home'>
        {console.log(allPresents)}
      
    </div>
  )
}

export default Home