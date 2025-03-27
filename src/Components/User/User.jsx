import React from "react";
import {Routes, Route } from "react-router-dom";
import UserPhotoPost from "./UserPhotoPost";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";
import Feed from "../Feed/Feed";

const User = ({ error }) =>{ 
    return (        
        <section className="container">
            <UserHeader />

                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/postar" element={<UserPhotoPost />} />
                    <Route path="/estatisticas" element={<UserStats />} />
                </Routes>
        </section>
    );
};

export default User;