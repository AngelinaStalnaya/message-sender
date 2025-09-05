import { Route, Routes } from 'react-router';
import './App.css';
import CreateForm from './components/CreateForm';
import HomePage from './pages/HomePage';


function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='send_message' element={<CreateForm/>} />
    </Routes>
  )
}

export default App
