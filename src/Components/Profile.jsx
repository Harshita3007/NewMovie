import React from "react";
import Navbar, { userInfo } from "./Navbar";

function Profile() {
    return (
        <>
            <Navbar />
            <div  className="profile-div">
            <div style={{margin : "auto"}}>
                <h1>USER DETAILS</h1>
                <h3> Name : {userInfo.name} </h3>
                <h3> Email : {userInfo.email}</h3>
            </div>
            </div>
        </>
    );
}

export default Profile