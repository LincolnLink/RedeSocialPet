import React from "react";
  
const PhotoPost = () => {  

    const [ token, setToken ] = React.useState('');
    const [ nome, setNome ] = React.useState('');
    const [ peso, setPeso ] = React.useState('');
    const [ idade, setIdade ] = React.useState('');
    const [ img, setImg ] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);   


    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token,
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) =>{
        console.log(json);
        setToken(json.token);
        return json;
      })

  }

  return (
    <>
      <h1>User Post</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="token"
          value={token}
          onChange={({target})=> setToken(target.value)}        
        /> 
        <input 
          type="text"
          placeholder="nome"
          value={nome}
          onChange={({target})=> setNome(target.value)}        
        />  
        <input 
          type="text"
          placeholder="peso"
          value={peso}
          onChange={({target})=> setPeso(target.value)}        
        />  
        <input 
          type="text"
          placeholder="idade"
          value={idade}
          onChange={({target})=> setIdade(target.value)}        
        />   
        <input 
          type="file"
          placeholder="img"          
          onChange={({target})=> setImg(target.files[0])}        
        />           
       
        <button>enviar</button>
        <p style={{wordBreak: 'break-all'}}>{token}</p>
      </form>
    </>
  )
}

export default PhotoPost
