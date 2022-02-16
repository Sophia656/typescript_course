import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoItemPage from './components/TodoItemPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UsersPage from './components/UsersPage';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <NavLink to='/users'>USERS</NavLink>
      <NavLink to='todos'>TODOS</NavLink>
    </div>
      <Routes>
        <Route path='/users' element={<UsersPage />} />
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/users/:id' element={<UserItemPage />} />
        <Route path='/todos/:id' element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;