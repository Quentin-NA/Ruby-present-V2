import Form from './components/form';
import Hobbies from './components/Hobbies';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <div className='container'>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/hobbies' element={<Hobbies />} />
        </Routes>
    </div>  
    </>
  );
}

export default App;
