import { useState } from 'react'
import './App.css'
import UserForm from './UserForm/UserForm.tsx';
import Users from './Users/Users';
import { User } from '../types';


function App() {
  const [users, setUser] = useState<User[]>([
    {id: '1', name: 'Jhon', email: 'hgh@gmail.com', category: 'admin', isActive: false},
  ]);

  const addUser = (user: User) => {
    setUser(prevState => [...prevState, user]);
  };

  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Users</span>
          </div>
        </nav>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm users={users} onSubmit={addUser}/>
          </div>
          <div className="col-8">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
