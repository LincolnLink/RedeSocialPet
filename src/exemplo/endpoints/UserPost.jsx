import React from "react";
import './App.css';
  
const UserPost = () => {  

  const [ username, setUsername ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
    console.log({

    });

  }

  return (
    <>
      <h1>User Post</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="username"
          value={username}
          onChange={({target})=> setUsername(target.value)}        
        />
        <input 
          type="text"
          placeholder="email"
          value={email}
          onChange={({target})=> setEmail(target.value)}        
        />
        <input 
          type="text"
          placeholder="password"
          value={password}
          onChange={({target})=> setPassword(target.value)}        
        />
      </form>
    </>
  )
}

export default UserPost
