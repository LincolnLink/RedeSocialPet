import React from "react";
import '../../src/';
import UserPost from "./endpoints/UserPost";
import TokenPost from "./endpoints/TokenPost";
import PhotoPost from "./endpoints/PhotoPost";
import PhotoGet from "./endpoints/PhotoGet";
  
const Api = () => {  

  return (
    <>
      <h1>Minha API</h1>
      <UserPost />
      <h1>Token post</h1>
      <TokenPost />
      <h1>Photo post</h1>
      <PhotoPost />
      <h1>Get post</h1>
      <PhotoGet />
    </>
  )
}

export default Api
