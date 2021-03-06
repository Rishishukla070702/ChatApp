import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase.js';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      {user ? <Chat/> : <SignIn/>}
       
    </div>
  );
}

export default App;
