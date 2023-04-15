import Form from './components/form';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Form />} />
        </Routes>
    </>
  );
}

export default App;
