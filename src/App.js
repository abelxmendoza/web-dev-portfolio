import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className = 'App'>

      <div className = 'leftside'>
        <div className = 'profilepic' >
          <img
            src="https://media.istockphoto.com/photos/grim-reaper-picture-id827848238?b=1&k=20&m=827848238&s=170667a&w=0&h=IaEMzVz0q7lOzp8mn0aotvZn6cYZJRV8xniPA_kmGf8="
            width="200px"
            height="200px"
          />
        </div>

        <div className = 'contactInfo'>
          <h2>Contact Info</h2>
          <h4>PHONE: (562) 322-2299</h4>
          <h4>E-MAIL: abelxmendoza@gmail.com</h4>
        </div>

        <div className = 'Education' >
          <h2>Education</h2>
            <ul>Clever Programmer Coding Bootcamp 2022-Present</ul>
            <ul>California State University Fullerton, Fullerton, Ca 2018-Present</ul>
            <ul>Computer Science Major</ul>
            <ul>Rio Hondo Community College, Whittier, CA 2014-2018</ul>
            <ul>La Serna High School, Whittier, CA 2009-2013</ul>
        </div>

        <div className= 'Skills'>
          <h2>Skills Summary</h2>

            <ul>C++, Java, Javascript, HTML, CSS, React, Bash</ul>
            <ul>Front End Development with REACT</ul>
            <ul>Data Structures and Object Oriented Programming</ul>
            <ul>Some databases experience with SQL and PHP</ul>
        </div>

        <div className = 'Links'>
          <h2>Links</h2>
          <a href="https://stackblitz.com/@abelxmendoza">Stackblitz</a>
          <a href="https://github.com/abelxmendoza">Github</a>
          <a href="https://replit.com/@AbelMendoza">Repl.it</a>
        </div>

      </div>



      <div className = 'rightside'>

        <div className = 'Name'>
          <h1>Abel Mendoza</h1>
        </div>

        <div className='About'>
          <h2>About</h2>
        </div>

        <h2>Experience</h2>
          <ul>El Pollo Loco, Pico Rivera, CA 2017-Current</ul>
          <ul>Horizon Solar Power, Pomona, CA 2017</ul>
          <ul>Popeye’s Restaurants, Whittier, CA 2016 - 2017</ul>

        <div className= 'Hobbies'>
          <h2>Hobbies</h2>
          <p>I’m interested in tech, web3, MMA, HomeBrewing, Investing, Anime, Film</p>

        </div>

      </div>
      
     
    </div>
  );
}
