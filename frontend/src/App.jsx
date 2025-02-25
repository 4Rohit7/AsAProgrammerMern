import React from "react";
import { Route, Routes } from 'react-router-dom';
import FloatingShape from "./components/FloatingShape";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";


const App = () => {
  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-green-700 to-emerald-700 flex items-center justify-center relative overflow-hidden">
      <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
      <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />

      <Routes>
        <Route path='/' element={"Home"} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />

      </Routes>
    </div>


    /*   <div>
         <div className="container bg-red-500 mx-auto">
           <h1 className="text-8xl text-sky-500">Hello tailwind cssv4 and React</h1>
           <div>
             <h2 className="text-5xl">This is 2xl</h2>
           </div>
           <div>
             <button class='bg-amber-500 px-5 py-2 rounded-2xl hover:bg-amber-700'>Click me</button>
           </div>
         </div>
       </div>
       */
  )
}
export default App;