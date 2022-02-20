
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import Post from './Component/Post';
import Profile from './Component/Profile';
import UserList from './Component/UserList';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="users" element={<UserList/>}/>
        <Route path="/user/:id" element={<Profile/>}/>
        <Route path="post/:id" element={<Post/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
