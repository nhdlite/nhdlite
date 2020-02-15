import React from 'react';
import profilePicture from './profilePicture1.jpg';
import './App.css';

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <img src={profilePicture} className="site-logo" alt="profile-pic" />
        <p className="site-text">
          The name is Nate Dessert. I have been programming professionally for nearly ten years. From mobile to web, database to desktop, I have programmed it. Please take a moment to check out some of my work.
        </p>

        <h1>Courses</h1>
        <h2>Sip of Java - <a href="https://www.udemy.com/course/a-sip-of-java/">Site</a> - <a href="https://www.facebook.com/groups/296364281220056/">Facebook Group</a></h2>
      </header>
    </div>
  );
}

export default App;
