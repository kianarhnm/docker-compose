"use client";

import { useState } from "react";

export default function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  async function login() {
	  console.log("Button");

    try {

      const response = await fetch(
        "/api/login/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );


      const data = await response.json();


      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }


    } catch(error) {

      setMessage("Backend connection failed");

    }

  }


  return (

    <main>

      <h1
        style={{color: "red", fontsize: "40px"}}>
      </h1>


      <input
        placeholder="username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />


      <br />


      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <br />


      <button onClick={login}>
        Login
      </button>


      <h2>
        {message}
      </h2>


    </main>

  );
}
