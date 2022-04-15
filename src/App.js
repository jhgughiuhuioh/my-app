import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Card from  './Components/Card';


function App() {
  const[name, setName] = useState('');
  const [userName, setUsername] = useState ('');
  const [followers, setFollowers] = useState ('');
  const [following, setFollowing] = useState ('');
  const [repos, setRepos] = useState ('');
  const [avatar, setAvatar] = useState ('');
  const [userInput, setUserInput] = useState ('');
  const [error, setError] = useState (null);

  useEffect( () => {
    fetch( "https://api.github.com/users/example")
       .then(res => res.json())
       .then(data => {
         console.loge(data);
       });
  }, []);

  const setData = ({ name, 
    login, 
    followers,
    following,
    public_repos, 
    avatar_url 
    })=> {
    setName(name);
    setUsername(login);
    setFollowers(followers)
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  
  };

  const handleSearch =(e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => { console.log('111111');
  e.preventDefault()
    fetch(`https://api.github.com/users/${userInput}`)
     .then(res => res.json())
     .then(data => { console.log(data)
       if (data.message) {
         setError(data.message);
       } else {
        setData(data); 
        setError(null);
       }
     });
  };

  return (
    <div>
      <Header />
      {/* <div className='navbar'>GitHub Search</div> */}
      <div classname='search'>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder='Github user' 
            name='github user'
            onChange={handleSearch}
             />
            <button type='submit'/>
         </form>
      </div>
      { error ? (<h1>{error}</h1>) : (
     <Card name={name} userName={userName} followers={followers} repos={repos} following={following} avatar={avatar}/>)
     }
  </div>
  );
}


  


export default App;
