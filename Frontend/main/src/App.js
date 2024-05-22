import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Aboutuscomponent from './Components/Aboutus_component';


// Exercise import 
import Exercisecomponent from './Components/Exercise_component';
import Chestexercises from './Pages/Exercises/Chestexercises'
import Bicepexercises from './Pages/Exercises/Bicepexercises';
import Shoulderexercises from './Pages/Exercises/Shoulderexercises'
import Backexercises from './Pages/Exercises/Backexercises'
import Legsexercise from './Pages/Exercises/Legsexercises'
import Tricepexercises from './Pages/Exercises/Tricepexercises'
import Absexercises from './Pages/Exercises/Absexercises'
import Glutesexercises from './Pages/Exercises/Glutesexercises'
import Forearmsexercises from './Pages/Exercises/Forearmsexercises'


// footer pages
import Contactus from './Pages/Footer_Pages/Contactus'
import Help from './Pages/Footer_Pages/Help'
import Faq from './Pages/Footer_Pages/Faq'
import Ourteam from './Pages/Footer_Pages/Our_team'
import Ourstory from './Pages/Footer_Pages/Our_story'
import Termsandcondition from './Pages/Footer_Pages/Termscondition'
import Privacypolicy from './Pages/Footer_Pages/Privacypolicy'

// personalised Recommendation 
import Personalisedrecom from './Pages/Personalised_recom/Personalisedrecom'
import Mealform from './Pages/Personalised_recom/Forms/Meal_form'
import Exerciseform from './Pages/Personalised_recom/Forms/Exercise_form'
import Exerciseresult from './Pages/Personalised_recom/Result/Exercise_result';
import Mealresult from './Pages/Personalised_recom/Result/Meal_result';

function App() {

  return (
    <>
    <BrowserRouter scrollRestoration="auto">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/exercises' element={<Exercisecomponent/>}/>
        <Route path='/chestexercises' element={<Chestexercises/>}/>
        <Route path='/backexercises' element={<Backexercises/>}/>
        <Route path='/bicepexercises' element={<Bicepexercises/>}/>
        <Route path='/shoulderexercises' element={<Shoulderexercises/>}/>
        <Route path='/tricepexercises' element={<Tricepexercises/>}/>
        <Route path='/legsexercise' element={<Legsexercise/>}/>
        <Route path='/forearmsexercises' element={<Forearmsexercises/>}/>
        <Route path='/glutesexercises' element={<Glutesexercises/>}/>
        <Route path='/absexercises' element={<Absexercises/>}/>
        <Route path='/aboutus' element={<Aboutuscomponent/>}/>
        
        <Route path='/help' element={<Help/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/ourteam' element={<Ourteam/>}/>
        <Route path='/ourstory' element={<Ourstory/>}/>
        <Route path='/termsandconditions' element={<Termsandcondition/>}/>
        <Route path='/privacypolicy' element={<Privacypolicy/>}/>

        <Route path='/personalisedcerecom' element={<Personalisedrecom/>}/>
        <Route path='/mealform' element={<Mealform/>}/>
        <Route path='/exerciseform' element={<Exerciseform/>}/>
        <Route path='/exerciseresult' element={<Exerciseresult/>}/>
        <Route path='/mealresult' element={<Mealresult/>}/>


      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
