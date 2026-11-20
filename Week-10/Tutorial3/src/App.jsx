import React from "react";
import Login from "./components/Login";

// Coba ubah nilai isLoggedIn menjadi true / false
var isLoggedIn = true;
const currentTime = new Date().getHours();
console.log(currentTime);

/* ---------------------------------------------------------------
   Langkah 1 (awal) - selalu menampilkan Hello + Login
   function App() {
     return (
       <div className="container">
         <h1>Hello</h1>
         <Login />
       </div>
     );
   }

   Langkah 2 - function renderConditionally() dengan if/else
   function renderConditionally() {
     if (isLoggedIn === true) {
       return <h1>Hello</h1>;
     } else {
       return <Login />;
     }
   }
   function App() {
     return <div className="container">{renderConditionally()}</div>;
   }

   Langkah 3 - ternary operator
   {isLoggedIn === true ? <h1>Hello</h1> : <Login />}

   Langkah 4 - ternary operator (lebih singkat)
   {isLoggedIn ? <h1>Hello</h1> : <Login />}

   Langkah 5 - ternary dengan null
   {isLoggedIn ? <h1>Hello</h1> : <Login />}
   {currentTime < 8 ? <h1>Why are you already working?</h1> : null}
---------------------------------------------------------------- */

// Langkah 6 (versi akhir) - && operator
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime < 8 && <h1>Why are you already working?</h1>}
    </div>
  );
}

export default App;
