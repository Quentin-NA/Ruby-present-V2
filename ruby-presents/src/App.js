import Form from './components/form';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <div className='container'>
        <Routes>
          <Route path='/' element={<Form />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
