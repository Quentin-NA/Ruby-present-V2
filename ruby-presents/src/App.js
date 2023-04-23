import Form from './components/form';
import Hobbies from './components/Hobbies';
import Budget from './components/Budget';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <div className='container'>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/hobbies' element={<Hobbies />} />
          <Route path='/budget' element={<Budget />} />
        </Routes>
    </div>  
    </>
  );
}

export default App;
