import logo from './logo.svg';
import './App.css';
import UserList from './Employees/UserList';
import CreateEmployee from "./Employees/CreateEmployee";
import EditEmployee from "./Employees/EditEmployee";
import DeleteEmployee from "./Employees/DeleteEmployee";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>CRUD REACT App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<UserList />} />
          <Route path='/crear-empleado' element={<CreateEmployee />} />
          <Route path='/editar-empleado' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
