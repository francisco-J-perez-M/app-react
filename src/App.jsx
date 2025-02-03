import './App.css';
import UserList from './components/usersList/usersList';
import useUser from './hooks/useUsers';

function App() {
  const { users } = useUser(); 
  return (
    <div className='App'>
      <UserList users={users} />
    </div>
  );
}

export default App;